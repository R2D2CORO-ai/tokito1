//***************************************************** Setup de eventos a escuchar
require('events').EventEmitter.defaultMaxListeners = 20
//***************************************************** HTTPS server setup
//-----* Express inicia servidor / carpeta raiz
//------------------------------------Express inicia servidor 
const express = require('express')
let heatsink
let clientesConectados = []
let arrayconversion = []
const app = express()
const fs = require('fs')
function sleep(ms){
return new Promise(resolve=> setTimeout(resolve,ms))
}
//let clientesConectados = [];
//const ImageDataURI = require('image-data-uri')
app.use(express.static(__dirname))//Carpeta de donde sirve / carpeta raiz public

const server = app.listen(8888, () => {
    console.log('Servidor web iniciado')
})

//-----* Filesystem module object
var fss = require('fs')
//-----* https module object
var https = require('https')

//NOTA****** SUSTITUIR CON VALORES REALES DEL FRONT-END
//----------Coneccion socket 
var io = require('socket.io')(server)

io.on('connection', (socket) =>{ 
//socket par flujo 42Q
    socket.on('pass42Q', async function(serialnumber,boxpoint) {await pass(serialnumber,boxpoint)})
    socket.on('fail42Q', async function(serialnumber,boxpoint) {await fail(serialnumber,boxpoint)})
    socket.on('validation42Q', async function(serialnumber,csn) {return a= await validation(serialnumber,csn)})
    socket.on('Writing', async function(step,sn,time){await writing(step,sn,time)})
    socket.on('picsaving2', async function (dataURI, serial, sqty) { // se le mandan los parametros no importa si no tienen los mismos nombres
    await savingpic2(dataURI, serial, sqty); //espera la funcion savingpic con los parametros 
    });
    socket.on('Homming', async function(){if(clientesConectados!=[]){clientesConectados.forEach(socket=>{Homming(socket)})}})
socket.on('picsaving', async function (dataURI, step,sn,valor) { // se le mandan los parametros no importa si no tienen los mismos nombres
    await savingpic(dataURI,step,sn,valor)
    ;});
    socket.on('logsaving', async function (logarray,serial){
        
        await savinglog(logarray,serial)
    });    
//socket renombrar carpeta
socket.on('renombrasnr', async function(serial){
    await renombraF(serial)
});
});

//---------------------------------------- move PLC 

async function savingpic(datauri,step,sn,valor){
    
    console.log(valor)
	const ImageDataURI = require('image-data-uri');
	return new Promise(async resolve =>{ 	
	let filePath='./samples/'+sn+'';//Ruta de las carpetas por serial
	let filePath1='./samples/'+step+'';
    let filevalidation=fs.existsSync(filePath);
	if (filevalidation){
		filePath=''+filePath+'/'+step+'';	
        filePath1=''+filePath1+'/'+valor+'';	
		ImageDataURI.outputFile(datauri, filePath)
        ImageDataURI.outputFile(datauri, filePath1)
	}
	else{		
		fs.mkdir(filePath,(error)=>{		
			if (error){
				console.log(error.message);//en caso de que el folder ya exista manda un error y evita hacer otro folder con el mismo nombre.
				}
				filePath=''+filePath+'/'+step+'';	
                filePath1=''+filePath1+'/'+valor+'';	
				ImageDataURI.outputFile(datauri, filePath)
				ImageDataURI.outputFile(datauri, filePath1)   
			});
		}
	});//Cierra Promise
}
async function savingpic2(datauri, serial, step) {
    let filePath;
    const ImageDataURI = require('image-data-uri');
    return new Promise(async resolve => {
        let random=parseInt(Math.random() * 200)
        let filePath = './samples-recortes/' + step + '';//Ruta de las carpetas por serial
        let filevalidation = fs.existsSync(filePath);
        if (filevalidation) {

            filePath = '' + filePath + '/' + random + '';
            ImageDataURI.outputFile(datauri, filePath)

        }
        else {
            fs.mkdir(filePath, (error) => {
                if (error) {
                    console.log(error.message);//en caso de que el folder ya exista manda un error y evita hacer otro folder con el mismo nombre.
                }
                filePath = '' + filePath + '/' + random + '';
                ImageDataURI.outputFile(datauri, filePath)
                
            });
        }
    });//Cierra Promise
}
async function savinglog(logarray,serial){
    return new Promise(async resolve => {
    let logpath='./samples/'+serial+'/log.txt';
    fs.writeFile(logpath,logarray, function(err){
        if(err) throw err;

    });
    resolve('resolved')
})
}
async function renombraF(serial){
    return new Promise(async resolve => {
    try{
        fs.rename('./samples/'+serial,
    './samples/'+serial+'_F',   
     function (err) {
            if (err) 
              console.log('Error de renombramiento');
    })
    }
    catch{
        console.log('Error de renombramiento')
    };
    resolve('resolved')
});   
}
//----------------------------------------- TCP/IP
async function Homming(connection){
    
    connection.write('16@')
    await sleep(500)
    connection.write('Wait@')
    await sleep(300)
}
var net = require('net')
var tcpipserver = net.createServer(function (connection) {
 try {  
    Homming(connection)
    clientesConectados=[]
    clientesConectados.push(connection);
    connection.on('data', function (data) { 
        console.log('Datos recibidos de PLC, data,', data.toString()); io.emit('Timsequence_start',data.toString())})
connection.on('close', function () {
    
    console.log('Keep-alive: Conexión cerrada. Reintentando...');
    // Reintentar la conexión
  });
} catch (e){
    
}
})
async function writing(step,sn,time){
    return new Promise(async resolve => {
        
    clientesConectados.forEach(socket=>{
        
        socket.write(step)
    })
    resolve('resolved')    
})
}
tcpipserver.listen(40000, function () {
    console.log('PLC Port 40000 listening...')
})
//***************************************************************************************----- 42Q
async function conversion(arraystatus) {
    arraystatus.forEach((status, index) => {
      arrayconversion[index] = status === 1 ? "PASS" : "FAIL";
    });
    return arrayconversion;
  }

//FUNCION PASS
async function pass(sn,boxpoint) {
    return new Promise(async resolve => {
    var net = require('net')
    var PORT = 50000
    var HOST = '148.164.96.7'
   
   await conversion(boxpoint)
    var  myJSON= "2"+"&"+"Tokito Final Audit"+"&"+""+sn+""+"&"+"Tokito-V1"+"&"+"Tesla-Tokito"+"&"+"NA"+"&"+"1"+"$"+"NA"+"&"+arrayconversion[1]+"&"+"P1"+"&"+"1"+"$"+"NA"+"&"+arrayconversion[2]+"&"+"P2"+"&"+"1"+"$"+"NA"+"&"+arrayconversion[3]+"&"+"P3"+"&"+"1"+"$"+"NA"+"&"+arrayconversion[4]+"&"+"P4"+"&"+"1"+"$"+"NA"+"&"+arrayconversion[5]+"&"+"P5"+"&"+"1"+"$"+"NA"+"&"+arrayconversion[6]+"&"+"P6"+"&"+"1"+"$"+"NA"+"&"+arrayconversion[7]+"&"+"P7"+"&"+"1"+"$"+"NA"+"&"+arrayconversion[8]+"&"+"P8"+"&"+"1"+"$"+"NA"+"&"+arrayconversion[9]+"&"+"P9"+"&"+"1"+"$"+"NA"+"&"+arrayconversion[10]+"&"+"P10"+"&"+"1"+"$"+"NA"+"&"+arrayconversion[11]+"&"+"P11"+"&"+"1"+"$"+"NA"+"&"+arrayconversion[12]+"&"+"P12"+"&"+"1"+"$"+"NA"+"&"+arrayconversion[13]+"&"+"P13"+"&"+"1"+"$"+"NA"+"&"+arrayconversion[14]+"&"+"P14"+"&"+"1"+"$"+"NA"+"&"+arrayconversion[15]+"&"+"P15"+"&"+"1"+"$"+"NA"+"&"+arrayconversion[16]+"&"+"P16"+"&"+"1"+"$"+"NA"+"&"+arrayconversion[17]+"&"+"P17"+"&"+"1"+"$"+"NA"+"&"+arrayconversion[18]+"&"+"Cover vs Heatsink Validation"+"&"+"1"
       //"2"+"&"+"Tokito Final Audit"+"&"+""+sn+""+"&"+"Tokito-V1"+"&"+"Tesla-Tokito"+"&"+"NA"+"&"+"PASS"+"&"+"P1"+"&"+""+boxpoint[1]+""+"&"+"P2"+"&"+""+boxpoint[2]+""+"&"+"P3"+"&"+""+boxpoint[3]+""+"&"+"P4"+"&"+""+boxpoint[4]+""+"&"+"P5"+"&"+""+boxpoint[5]+""+"&"+"P6"+"&"+""+boxpoint[6]+""+"&"+"P7"+"&"+""+boxpoint[7]+""+"&"+"P8"+"&"+""+boxpoint[8]+""+"&"+"P9"+"&"+""+boxpoint[9]+""+"&"+"P10"+"&"+""+boxpoint[10]+""+"&"+"P11"+"&"+""+boxpoint[11]+""+"&"+"P12"+"&"+""+boxpoint[12]+""+"&"+"P13"+"&"+""+boxpoint[13]+""+"&"+"P14"+"&"+""+boxpoint[14]+""+"&"+"P15"+"&"+""+boxpoint[15]+""+"&"+"P16"+"&"+""+boxpoint[16]+""+"&"+"P17"+"&"+""+boxpoint[17]+""+"&"+"heatsink"+"&"+""+boxpoint[18]+""
    var client = net.connect(PORT,HOST,function() { //'connect' listener
      console.log(myJSON) 
      client.write(myJSON)
      setTimeout(function findesesion(){client.end();},500)
      })
      resolve('resolved')
    })
}
//FUNCION FAIL
async function fail(sn,boxpoint,validation) {
    return new Promise(async resolve => {
    var net = require('net')
    var PORT = 50000
    var HOST = '148.164.96.7'
    await conversion(boxpoint)
    var  myJSON= "2"+"&"+"Tokito Final Audit"+"&"+""+sn+""+"&"+"Tokito-V1"+"&"+"Tesla-Tokito"+"&"+"NA"+"&"+"0"+"$"+"NA"+"&"+arrayconversion[1]+"&"+"P1"+"&"+"1"+"$"+"NA"+"&"+arrayconversion[2]+"&"+"P2"+"&"+"1"+"$"+"NA"+"&"+arrayconversion[3]+"&"+"P3"+"&"+"1"+"$"+"NA"+"&"+arrayconversion[4]+"&"+"P4"+"&"+"1"+"$"+"NA"+"&"+arrayconversion[5]+"&"+"P5"+"&"+"1"+"$"+"NA"+"&"+arrayconversion[6]+"&"+"P6"+"&"+"1"+"$"+"NA"+"&"+arrayconversion[7]+"&"+"P7"+"&"+"1"+"$"+"NA"+"&"+arrayconversion[8]+"&"+"P8"+"&"+"1"+"$"+"NA"+"&"+arrayconversion[9]+"&"+"P9"+"&"+"1"+"$"+"NA"+"&"+arrayconversion[10]+"&"+"P10"+"&"+"1"+"$"+"NA"+"&"+arrayconversion[11]+"&"+"P11"+"&"+"1"+"$"+"NA"+"&"+arrayconversion[12]+"&"+"P12"+"&"+"1"+"$"+"NA"+"&"+arrayconversion[13]+"&"+"P13"+"&"+"1"+"$"+"NA"+"&"+arrayconversion[14]+"&"+"P14"+"&"+"1"+"$"+"NA"+"&"+arrayconversion[15]+"&"+"P15"+"&"+"1"+"$"+"NA"+"&"+arrayconversion[16]+"&"+"P16"+"&"+"1"+"$"+"NA"+"&"+arrayconversion[17]+"&"+"P17"+"&"+"1"+"$"+"NA"+"&"+arrayconversion[18]+"&"+"Cover vs Heatsink Validation"+"&"+"1"
    var client = net.connect(PORT,HOST,function() { //'connect' listener
      client.write(myJSON)
      setTimeout(function findesesion(){client.end();},500)
      })
      resolve('resolved')
    })
}
async function validation(sn,csn) {
    return new Promise(async resolve => {
    var net = require('net')
    var PORT = 50000
    var HOST = '148.164.96.7'
       var  myJSON="F"+"&"+"Tokito Final Audit"+"&"+""+sn+""+"&"+"NA"+"&"+"Tesla-Tokito"+"&"+"tokito-V1"+"&"+"NA"+"&"+"NA"+"&"+"NA"+"&"+"NA"+"&"+"NA"+"&"+"0"

    var client = net.connect(PORT,HOST,async function() { //'connect' listener
        client.write(myJSON)
        client.on('data', async function(data)  {
            let Cdata=data.toString()
        if(Cdata.slice(26,55)==csn || (csn == "P1135558-54-A:SANN2405200007G" || csn == "P1135558-54-A:SANN2405200014N"|| csn == "P1135558-16-B:SANN2423700001T")){
            io.emit('heatsink',1)
            await sleep(300)
            await writing('1@',sn)
            await sleep(300)
        }
        else if(Cdata.substr(0,1)==0  && (csn != "P1135558-54-A:SANN2405200007G" || csn != "P1135558-54-A:SANN2405200014N" || csn == "P1135558-16-B:SANN2423700001T")){ //if(Cdata.substr(0,1) == 0 && csn == "P1135558-04-A:SANN2428500028C" || csn == "P1135558-04-A:SANN2428500028C" (PONER EL DE LAS GOLDEN)"){
            //  await writing('1@',sn)
            //await sleep(300)}
            io.emit('ErrorH',Cdata)
            await writing('Pass@')
            await sleep(300)
            await writing('Wait@')
        }
        else{
            
            io.emit('heatsink',0)
            await sleep(300)
            await writing('1@',sn)
            await sleep(300)
        }
        client.end();
});
      })
      resolve('resolved')
    })
    
}