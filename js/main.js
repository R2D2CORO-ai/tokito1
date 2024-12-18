//Front-end
//**************************DECLARACION DE VARIABLES
let coord1 = []
let coord2 = []
let coord3 = []
let boxpoint = []
let evaluacion = []
let IAdesiction = []
let context
let cordenada
let Punto
let serial = '123'
let point
let statusf
let resultado
let ip = '172.24.128.220' //IP EJEMPLO
let puerto = 40000
let input_size
let image 
let Bucle
//let camid1 = "126ad8c320f8ec3e3ff384f231ad6e4cd9ddc0094c42541997ca54ad1bae5966"
//let camid2 = "8459422e4206857dc60379cfe22bc5518d8721f32d7ecd784d76d10ae7e3b5e9"

//************************DECLARACION DE CANVAS

let fullimage = document.getElementById('CanvasFHD')
let fullimagectx = fullimage.getContext('2d')
let capturedCanvas = document.getElementById('capturedCanvas') //canvas donde se pondra la imagen original 
let capturedCanvasctx = capturedCanvas.getContext('2d')
let tarjeta2 = document.getElementsByClassName('tarjeta2') //canvas donde se pondra la imagen original
let tarjeta = document.getElementsByClassName('tarjeta') //canvas donde se pondra la imagen original 
let contenedor = document.getElementsByClassName('contenedor') //canvas donde se pondra la imagen original 

let recortito1 = document.getElementById('Canvascut1') //Canvas para el recorte de P1 
let recortito1ctx = recortito1.getContext('2d')
let recortito2 = document.getElementById('Canvascut2') //Canvas para el recorte de P1 
let recortito2ctx = recortito2.getContext('2d')
let recortito3 = document.getElementById('Canvascut3') //Canvas para el recorte de P1 
let recortito3ctx = recortito3.getContext('2d')
let recortito4 = document.getElementById('Canvascut4') //Canvas para el recorte de P1 
let recortito4ctx = recortito4.getContext('2d')
let recortito5 = document.getElementById('Canvascut5') //Canvas para el recorte de P1 
let recortito5ctx = recortito5.getContext('2d')
let recortito6 = document.getElementById('Canvascut6') //Canvas para el recorte de P1 
let recortito6ctx = recortito6.getContext('2d')
let recortito7 = document.getElementById('Canvascut7') //Canvas para el recorte de P1 
let recortito7ctx = recortito7.getContext('2d')
let recortito8 = document.getElementById('Canvascut8') //Canvas para el recorte de P1 
let recortito8ctx = recortito8.getContext('2d')
let recortito9 = document.getElementById('Canvascut9') //Canvas para el recorte de P1 
let recortito9ctx = recortito9.getContext('2d')
let recortito10 = document.getElementById('Canvascut10') //Canvas para el recorte de P1 
let recortito10ctx = recortito10.getContext('2d')
let recortito11 = document.getElementById('Canvascut11') //Canvas para el recorte de P1 
let recortito11ctx = recortito11.getContext('2d')
let recortito12 = document.getElementById('Canvascut12') //Canvas para el recorte de P1 
let recortito12ctx = recortito12.getContext('2d')
let recortito13 = document.getElementById('Canvascut13') //Canvas para el recorte de P1 
let recortito13ctx = recortito13.getContext('2d')
let recortito14 = document.getElementById('Canvascut14') //Canvas para el recorte de P1 
let recortito14ctx = recortito14.getContext('2d')
let recortito15 = document.getElementById('Canvascut15') //Canvas para el recorte de P1 
let recortito15ctx = recortito15.getContext('2d')
let recortito16 = document.getElementById('Canvascut16') //Canvas para el recorte de P1 
let recortito16ctx = recortito16.getContext('2d')
let recortito17 = document.getElementById('Canvascut17') //Canvas para el recorte de P1 
let recortito17ctx = recortito17.getContext('2d')
let recortito17calis = document.getElementById('Canvascut17calis') //Canvas para el recorte de P1 
let recortito17calisctx = recortito17calis.getContext('2d')
let p
let statusFinal


//**************************DECLARACION DE MODELOS
let model = new cvstfjs.ObjectDetectionModel()
let model2 = new cvstfjs.ClassificationModel()

// Modelos de segmentacion
let modelp1 = new cvstfjs.ObjectDetectionModel()
let modelp2 = new cvstfjs.ObjectDetectionModel()
let modelp3 = new cvstfjs.ObjectDetectionModel()
let modelp4 = new cvstfjs.ObjectDetectionModel()
let modelp5 = new cvstfjs.ObjectDetectionModel()
let modelp6 = new cvstfjs.ObjectDetectionModel()
let modelp7 = new cvstfjs.ObjectDetectionModel()
let modelp8 = new cvstfjs.ObjectDetectionModel()
let modelp9 = new cvstfjs.ObjectDetectionModel()
let modelp10 = new cvstfjs.ObjectDetectionModel()
let modelp11 = new cvstfjs.ObjectDetectionModel()
let modelp12 = new cvstfjs.ObjectDetectionModel()
let modelp13 = new cvstfjs.ObjectDetectionModel()
let modelp14 = new cvstfjs.ObjectDetectionModel()
let modelp15 = new cvstfjs.ObjectDetectionModel()
let modelp16 = new cvstfjs.ObjectDetectionModel()
let modelp17 = new cvstfjs.ObjectDetectionModel()
let modelp18 = new cvstfjs.ObjectDetectionModel()

let modelClasP1 = new  cvstfjs.ClassificationModel()
let modelClasP2 = new  cvstfjs.ClassificationModel()
let modelClasP3 = new  cvstfjs.ClassificationModel()
let modelClasP4 = new  cvstfjs.ClassificationModel()
let modelClasP5 = new  cvstfjs.ClassificationModel()
let modelClasP6 = new  cvstfjs.ClassificationModel()
let modelClasP7 = new  cvstfjs.ClassificationModel()
let modelClasP8 = new  cvstfjs.ClassificationModel()
let modelClasP9 = new  cvstfjs.ClassificationModel()
let modelClasP10 = new  cvstfjs.ClassificationModel()
let modelClasP11 = new  cvstfjs.ClassificationModel()
let modelClasP12 = new  cvstfjs.ClassificationModel()
let modelClasP13 = new  cvstfjs.ClassificationModel()
let modelClasP14 = new  cvstfjs.ClassificationModel()
let modelClasP15 = new  cvstfjs.ClassificationModel()
let modelClasP16 = new  cvstfjs.ClassificationModel()
function sleep(ms){
    return new Promise(resolve=> setTimeout(resolve,ms))
    }

     modelp1.loadModelAsync('./models/segmentacion-old/P1/model.json')
     modelp2.loadModelAsync('./models/segmentacion-old/P2/model.json')
     modelp3.loadModelAsync('./models/segmentacion-old/P3/model.json')
     modelp4.loadModelAsync('./models/segmentacion-old/P4/model.json')
     modelp5.loadModelAsync('./models/segmentacion-old/P5/model.json')
     modelp6.loadModelAsync('./models/segmentacion-old/P6/model.json')
     modelp7.loadModelAsync('./models/segmentacion-old/P7/model.json')
     modelp8.loadModelAsync('./models/segmentacion-old/P8/model.json')
     modelp9.loadModelAsync('./models/segmentacion-old/P9/model.json')
     modelp10.loadModelAsync('./models/segmentacion-old/P10/model.json')
     modelp11.loadModelAsync('./models/segmentacion-old/P11/model.json')
     modelp12.loadModelAsync('./models/segmentacion-old/P12/model.json')
     modelp13.loadModelAsync('./models/segmentacion-old/P13/model.json')
     modelp14.loadModelAsync('./models/segmentacion-old/P14/model.json')
     modelp15.loadModelAsync('./models/segmentacion-old/P15/model.json')
     modelp16.loadModelAsync('./models/segmentacion-old/P16/model.json')
     modelp17.loadModelAsync('./models/segmentacion-old/P17/model.json')
     modelp18.loadModelAsync('./models/segmentacion-old/P18/model.json')
    console.log(modelp1)
    //Modelos DEMO
     model.loadModelAsync('./models/segmentacion-old/model.json')
    console.log(modelp9)
    model2.loadModelAsync('./models/clasificacion/model.json');

    //Modelos Clasificacion
     modelClasP1.loadModelAsync('./models/clasificacion/P1/model.json');
     modelClasP2.loadModelAsync('./models/clasificacion/P2/model.json');
     modelClasP3.loadModelAsync('./models/clasificacion/P3/model.json');
     modelClasP4.loadModelAsync('./models/clasificacion/P4/model.json');
     modelClasP5.loadModelAsync('./models/clasificacion/P5/model.json');
     modelClasP6.loadModelAsync('./models/clasificacion/P6/model.json');
     modelClasP7.loadModelAsync('./models/clasificacion/P7/model.json');
     modelClasP8.loadModelAsync('./models/clasificacion/P8/model.json');
     modelClasP9.loadModelAsync('./models/clasificacion/P9/model.json');
     modelClasP10.loadModelAsync('./models/clasificacion/P10/model.json');
     modelClasP11.loadModelAsync('./models/clasificacion/P11/model.json');
     modelClasP12.loadModelAsync('./models/clasificacion/P12/model.json');
     modelClasP13.loadModelAsync('./models/clasificacion/P13/model.json');
     modelClasP14.loadModelAsync('./models/clasificacion/P14/model.json');
     modelClasP15.loadModelAsync('./models/clasificacion/P15/model.json');
     modelClasP16.loadModelAsync('./models/clasificacion/P16/model.json');

//*************************BANDERAS PLC PARA INICIAR SECUENCIA 
     open_cam(1, 1000)
const socket = io();
socket.emit('Homming')

socket.on('reload', async function () {
    reload(100)
})
socket.on('heatsink', async function (heatsink) {
    allpoints(18, heatsink)
   // console.log('Estoy el boxpoint',boxpoint[18],heatsink)
})
socket.on('ErrorH', async function (ErrorH) {
    HeatsinkError(ErrorH) 
})



socket.on('Timsequence_start', async function (infoplc) {
    //document.getElementById('wait').style.visibility = "hidden"
    console.log(infoplc)
        if(infoplc.substr(0, 3).includes('&&&')){
            step = infoplc.substr(3, 2)
            step1 = infoplc.substr(3, 1)
        }
        else{
            step = infoplc.substr(2, 2)
            step1 = infoplc.substr(2, 1)
        }
        
        if (step1 == 'P') {
            indiceCover=infoplc.indexOf('P')
            cadenaHeatsink=infoplc.substr(indiceCover+29,35)
            indiceHeatsink=cadenaHeatsink.indexOf('P')
            hsn=cadenaHeatsink.substr(indiceHeatsink,29)
            csn=infoplc.substr(indiceCover,29)
            sn = infoplc.substr(0, 32)
            sn1 = sn.substr(17,30)
            await sleep(200)
            socket.emit('validation42Q',hsn,csn)
            await sleep(200)
            p = 1
            console.log(sn1)
        }
        let stepInt=parseInt(step)
        
       // console.log(stepInt)
       if (step == '01' && p == 1) {
        p = 2
      // await open_cam(1, 1800)
        //console.log(step)
        await testsequence(step, sn1, p - 1, recortito1) //tornillos

        socket.emit('Writing', '2@', sn,0)
    }
    if (step == '02' && p == 2) {
        p = 3
        await testsequence(step, sn1, p - 1, recortito2) //tornillos
        socket.emit('Writing', '3@', sn,0)
    }
    if (step == '03' && p == 3) {
        p = 4
        await testsequence(step, sn1, p - 1,recortito3) // punto 3 conector 1
        socket.emit('Writing', '4@', sn,0)
    }
    if (step == '04' && p == 4) {
        p = 5
        await testsequence(step, sn1, p - 1, recortito4)//punto 4 conector 2 (blanco)
        socket.emit('Writing', '5@', sn,0)
    }
    if (step == '05' && p == 5) {
        p = 6
        await testsequence(step, sn1, p - 1, recortito5) //punto 5 conector 3 (naranja)
        socket.emit('Writing', '6@', sn,0)
    }
    if (step == '06' && p == 6) {
        p = 7
        await testsequence(step, sn1, p - 1,recortito6) //tapon
        socket.emit('Writing', '7@', sn,0)
    }
    if (step == '07' && p == 7) {
        p = 8
        await testsequence(step, sn1, p - 1, recortito7) //etiqueta amarilla
        socket.emit('Writing', '8@', sn,0)
    }
    if (step == '08' && p == 8) {
        p = 9
        await testsequence(step, sn1, p - 1, recortito8) //tornillos
        socket.emit('Writing', '9@', sn,0)
    }
    if (step == '09' && p == 9) {
        p = 10
        await testsequence(step, sn1, p - 1, recortito9) //tornillos
        socket.emit('Writing', '10@', sn,0)
    }
    if (step == '10' && p == 10) {
        p = 11
        await testsequence(step, sn1, p - 1, recortito10) //etiqueta negra
        socket.emit('Writing', '11@', sn,0)
    }
    if (step == '11' && p == 11) {
        p = 12
        await testsequence(step, sn1, p - 1, recortito11) // qr/etiqueta blanca
        socket.emit('Writing', '12@', sn,0)
    }
    if (step == '12' && p == 12) {
        p = 13
        await testsequence(step, sn1, p - 1, recortito12) //punto 5 conector 3 (naranja)
        socket.emit('Writing', '13@', sn,0)
    }
    if (step == '13' && p == 13) {
        p = 14
        await testsequence(step, sn1, p - 1, recortito13) //tapon
        socket.emit('Writing', '14@', sn,0)
    }
    if (step == '14' && p == 14) {
        p = 15
        await testsequence(step, sn1, p - 1, recortito14) //tornillos
        socket.emit('Writing', '15@', sn,0)
    }
    if (step == '15' && p == 15) {
        p = 16
        await testsequence(step, sn1, p - 1, recortito15) //tornillos
        await evaluaArray(sn,hsn)
        await plc_response(boxpoint,sn1)
        await reload(2000)
    }

})

async function reload(time){
    document.getElementById('tarjeta2').style.background = 'transparent'
    let canvasCtxA=[fullimagectx,capturedCanvasctx,recortito1ctx,recortito2ctx,recortito3ctx,recortito4ctx,recortito5ctx,recortito6ctx,recortito7ctx,recortito8ctx,recortito9ctx,recortito10ctx,recortito11ctx,recortito12ctx,recortito13ctx,recortito14ctx,recortito15ctx,recortito16ctx,recortito17ctx]
    for(let i=0;i<canvasCtxA.length;i++){
        console.log(canvasCtxA[i])
        canvasCtxA[i].reset();
    }
    
}
//************************FUNCIONES SECUENCIA
async function testsequence(step, sn, p, canvas) {
    return new Promise(async resolve => {
        
        coord1=[]
        canbughide()
        await captureimage(p)
        //console.log(sn)
        await predict1(p,canvas)
        await analisis(step,sn,p,canvas)
        resolve('resolved')
        
    })
    //setTimeout(function fire() { location.reload() }, 2000)
}

//*************************FUNCIONES ANALISIS
async function analisis(step, sn, p,canvas) {
    return new Promise(async resolve => { // inicio de promesa 

        switch (p) {
            case 1://coordenadas P1
               recortito1ctx.drawImage(fullimage,coord1[0], coord1[1], coord1[2], coord1[3], 0, 0, recortito1ctx.canvas.width, recortito1ctx.canvas.height) // coordenada y tamaño de recorte en el canvas
                await mlinspector( recortito1, coord1[0],1)
                allpoints(1, statusf)
                var dataURI = recortito1.toDataURL('image/jpeg')
                savepic2(dataURI, step, sn)
                await snapshot(step, sn)
                break
            case 2://P2
                recortito2ctx.drawImage(fullimage, coord1[0], coord1[1], coord1[2], coord1[3], 0, 0, recortito2ctx.canvas.width, recortito2ctx.canvas.height) // coordenada y tamaño de recorte en el canvas
                await mlinspector(recortito2, coord1[0],2)
                allpoints(2, statusf)
                await snapshot(step, sn)
                var dataURI = recortito2.toDataURL('image/jpeg')
                savepic2(dataURI, step, sn)
                break
            case 3:
                recortito3ctx.drawImage(fullimage, coord1[0], coord1[1], coord1[2], coord1[3], 0, 0, recortito3ctx.canvas.width, recortito3ctx.canvas.height) // coordenada y tamaño de recorte en el canvas
                await mlinspector(recortito3, coord1[0],3)
                allpoints(3, 1)
                await snapshot(step, sn)
                var dataURI = recortito3.toDataURL('image/jpeg')
                savepic2(dataURI, step, sn)
                break
            case 4:
                recortito4ctx.drawImage(fullimage, coord1[0], coord1[1], coord1[2], coord1[3], 0, 0, recortito4ctx.canvas.width, recortito4ctx.canvas.height) // coordenada y tamaño de recorte en el canvas
                await mlinspector(recortito4, coord1[0],4)
                allpoints(4, statusf)
                await snapshot(step, sn)
                var dataURI = recortito4.toDataURL('image/jpeg')
                savepic2(dataURI, step, sn)
                break
            case 5:
                recortito5ctx.drawImage(fullimage, coord1[0], coord1[1], coord1[2], coord1[3], 0, 0, recortito5ctx.canvas.width, recortito5ctx.canvas.height) // coordenada y tamaño de recorte en el canvas
                await mlinspector(recortito5, coord1[0],5)
                allpoints(5, statusf)
                await snapshot(step, sn)
                var dataURI = recortito5.toDataURL('image/jpeg')
                savepic2(dataURI, step, sn)
                break
            case 6:
                recortito6ctx.drawImage(fullimage, coord1[0], coord1[1], coord1[2], coord1[3], 0, 0, recortito6ctx.canvas.width, recortito6ctx.canvas.height) // coordenada y tamaño de recorte en el canvas
                await mlinspector(recortito6, coord1[0],6)
                allpoints(6, statusf)
                await snapshot(step, sn)
                var dataURI = recortito6.toDataURL('image/jpeg')
                savepic2(dataURI, step, sn)
                break
            case 7:
                recortito7ctx.drawImage(fullimage, coord1[0], coord1[1], coord1[2], coord1[3], 0, 0, recortito7ctx.canvas.width, recortito7ctx.canvas.height) // coordenada y tamaño de recorte en el canvas
                await mlinspector(recortito7, coord1[0],7)
                allpoints(7, statusf)
                await snapshot(step, sn)
                var dataURI = recortito7.toDataURL('image/jpeg')
                savepic2(dataURI, step, sn)
                break
            case 8:
                recortito8ctx.drawImage(fullimage, coord1[0], coord1[1], coord1[2], coord1[3], 0, 0, recortito8ctx.canvas.width, recortito8ctx.canvas.height) // coordenada y tamaño de recorte en el canvas
                await mlinspector(recortito8, coord1[0],8)
                allpoints(8, statusf)
                await snapshot(step, sn)
                var dataURI = recortito8.toDataURL('image/jpeg')
                savepic2(dataURI, step, sn)
                break
            case 9:
                recortito9ctx.drawImage(fullimage, coord1[0], coord1[1], coord1[2], coord1[3], 0, 0, recortito9ctx.canvas.width, recortito9ctx.canvas.height) // coordenada y tamaño de recorte en el canvas
                await mlinspector(recortito9, coord1[0],9)
                allpoints(9, statusf)
                await snapshot(step, sn)
                var dataURI = recortito9.toDataURL('image/jpeg')
                savepic2(dataURI, step, sn)
                break
            case 10:
                recortito10ctx.drawImage(fullimage, coord1[0], coord1[1], coord1[2], coord1[3], 0, 0, recortito10ctx.canvas.width, recortito10ctx.canvas.height) // coordenada y tamaño de recorte en el canvas
                await mlinspector(recortito10, coord1[0],10)
                allpoints(10, statusf)
                await snapshot(step, sn)
                var dataURI = recortito10.toDataURL('image/jpeg')
                savepic2(dataURI, step, sn)
                break
            case 11:
                recortito11ctx.drawImage(fullimage, coord1[0], coord1[1], coord1[2], coord1[3], 0, 0, recortito11ctx.canvas.width, recortito11ctx.canvas.height) // coordenada y tamaño de recorte en el canvas
                await mlinspector(recortito11, coord1[0],11)
                allpoints(11, statusf)
                await snapshot(step, sn)
                var dataURI = recortito11.toDataURL('image/jpeg')
                savepic2(dataURI, step, sn)
                break
            case 12:
                recortito12ctx.drawImage(fullimage, coord1[0], coord1[1], coord1[2], coord1[3], 0, 0, recortito12ctx.canvas.width, recortito12ctx.canvas.height) // coordenada y tamaño de recorte en el canvas
                await mlinspector(recortito12, coord1[0],12)
                allpoints(12, 1)
                await snapshot(step, sn)
                var dataURI = recortito12.toDataURL('image/jpeg')
                savepic2(dataURI, step, sn)
                break
            case 13:
                recortito13ctx.drawImage(fullimage, coord1[0], coord1[1], coord1[2], coord1[3], 0, 0, recortito13ctx.canvas.width, recortito13ctx.canvas.height) // coordenada y tamaño de recorte en el canvas
                await mlinspector(recortito13, coord1[0],13)
                allpoints(13, statusf)
                await snapshot(step, sn)
                var dataURI = recortito13.toDataURL('image/jpeg')
                savepic2(dataURI, step, sn)
                break
            case 14:
                recortito14ctx.drawImage(fullimage, coord1[0], coord1[1], coord1[2], coord1[3], 0, 0, recortito14ctx.canvas.width, recortito14ctx.canvas.height) // coordenada y tamaño de recorte en el canvas
                await mlinspector(recortito14, coord1[0],14)
                allpoints(14, statusf)
                await snapshot(step, sn)
                var dataURI = recortito14.toDataURL('image/jpeg')
                savepic2(dataURI, step, sn)
                break
            case 15:
                recortito15ctx.drawImage(fullimage, coord1[0], coord1[1], coord1[2], coord1[3], 0, 0, recortito15ctx.canvas.width, recortito15ctx.canvas.height) // coordenada y tamaño de recorte en el canvas
                await mlinspector(recortito15, coord1[0],15)
                allpoints(15, statusf)
                await snapshot(step, sn)
                var dataURI = recortito15.toDataURL('image/jpeg')
                savepic2(dataURI, step, sn)
                stopcam()

                coord1=[]

                //PUNTO 16 
                await open_cam(2, 200)
                await captureimage(16)
                await predict1(16,recortito16)
                recortito16ctx.drawImage(fullimage, coord1[0], coord1[1], coord1[2], coord1[3], 0, 0, recortito16ctx.canvas.width, recortito16ctx.canvas.height) // coordenada y tamaño de recorte en el canvas
                
                await mlinspector(recortito16, coord1[0],16)
                allpoints(16, statusf)
                await snapshot(16, sn)
                
                var dataURI = recortito16.toDataURL('image/jpeg')
                savepic2(dataURI, 16, sn)
                stopcam()

                //PUNTO 17
                coord1=[]
                await open_cam(3, 500)
                await captureimage(17)
                await predict1(17,recortito17)
                
                
                recortito17ctx.drawImage(fullimage, coord1[0], coord1[1], coord1[2], coord1[3], 0, 0, recortito17ctx.canvas.width, recortito17ctx.canvas.height) // coordenada y tamaño de recorte en el canvas
                capturedCanvas.width=recortito17.width 
                console.log(tarjeta2)
                capturedCanvas.height=recortito17.height
                tarjeta2.width=recortito17.width 
                tarjeta2.height=recortito17.height
                tarjeta.width=recortito17.width 
                tarjeta.height=recortito17.height
                contenedor.width=recortito17.width 
                contenedor.height=recortito17.height
                capturedCanvasctx.drawImage(recortito17, 0, 0, recortito17.width, recortito17.height)
                
                await predict1(18,recortito17)

                console.log(statusf)
                allpoints(17, statusf)
                await snapshot(17, sn)
                
                var dataURI = recortito17.toDataURL('image/jpeg')
                savepic2(dataURI, 17, sn)
                break

            default:
        }
        resolve('resolved')
    })
}

//*************************FUNCIONES GUARDADO DE VALOR POR PUNTO
function allpoints(pot, statusf) {
    boxpoint[pot]=statusf// Array guarda el valor de cada punto analizado 
}
//*************************FUNCION DE EVALUACION DE ARRAYS */
async function evaluaArray() {
    return new Promise(async resolve => {
        let resultadofinal = boxpoint.some((e) => e == "0")
        
        if (resultadofinal == false) {
            console.log(resultadofinal)
            passtarjeta()
            let pass1 = 1
            await sleep(300)
            socket.emit('Writing', 'Pass@', sn)
            await sleep(300)
        } else {
            await sleep(300)
            socket.emit('Writing', 'Fail@', sn)
            await sleep(300)
            
            //passtarjeta()
            failtarjeta()
            let fail0 = 0
        }
        resultado = resultadofinal
        
        resolve('resolved')
    })
}

//**************************FUNCIONES AL BACK-END
//**************************Funcion de movimiento
function plc_response(boxpoint,sn) { //El Array boxpoint guarda la equivalencia del punto, cuando vale pass o cuando vale fail
    return new Promise(async resolve => {
        //console.log("plc_response: boxpoint = ", boxpoint)
        logarray =
            "\n" +
            "Point 1 Tornillo"            + " = " + boxpoint[1] + " --> " + `${boxpoint[1] == 0 ? 'Fail' : 'Pass'}` + "\n" +
            "Point 2 Tornillo"            + " = " + boxpoint[2] + " --> " + `${boxpoint[2] == 0 ? 'Fail' : 'Pass'}` + "\n" +
            "Point 3 Conector"            + " = " + boxpoint[3] + " --> " + `${boxpoint[3] == 0 ? 'Fail' : 'Pass'}` + "\n" +
            "Point 4 Conector"            + " = " + boxpoint[4] + " --> " + `${boxpoint[4] == 0 ? 'Fail' : 'Pass'}` + "\n" +
            "Point 5 Conector"            + " = " + boxpoint[5] + " --> " + `${boxpoint[5] == 0 ? 'Fail' : 'Pass'}` + "\n" +
            "Point 6 Tapon Negro"         + " = " + boxpoint[6] + " --> " + `${boxpoint[6] == 0 ? 'Fail' : 'Pass'}` + "\n" +
            "Point 7 Etiqueta Amarilla"   + " = " + boxpoint[7] + " --> " + `${boxpoint[7] == 0 ? 'Fail' : 'Pass'}` + "\n" +
            "Point 8 tornillo"            + " = " + boxpoint[8] + " --> " + `${boxpoint[8] == 0 ? 'Fail' : 'Pass'}` + "\n" +
            "Point 9 tornillo"            + " = " + boxpoint[9] + " --> " + `${boxpoint[9] == 0 ? 'Fail' : 'Pass'}` + "\n" +
            "Point 10 Etiqueta Negra"     + " = " + boxpoint[10] + " --> " + `${boxpoint[10] == 0 ? 'Fail' : 'Pass'}` + "\n" +
            "Point 11 Etiqueta Blanca QR" + " = " + boxpoint[11] + " --> " + `${boxpoint[11] == 0 ? 'Fail' : 'Pass'}` + "\n" +
            "Point 12 Conector"           + " = " + boxpoint[12] + " --> " + `${boxpoint[12] == 0 ? 'Fail' : 'Pass'}` + "\n" +
            "Point 13 Tapon"            + " = " + boxpoint[13] + " --> " + `${boxpoint[13] == 0 ? 'Fail' : 'Pass'}` + "\n" +
            "Point 14 Tornillo"         + " = " + boxpoint[14] + " --> " + `${boxpoint[14] == 0 ? 'Fail' : 'Pass'}` + "\n" +
            "Point 15 Tornillo"         + " = " + boxpoint[15] + " --> " + `${boxpoint[15] == 0 ? 'Fail' : 'Pass'}` + "\n" +
            "Point 16 Tornillos y Etiqueta Negra"  + " = " + boxpoint[16] + " --> " + `${boxpoint[16] == 0 ? 'Fail' : 'Pass'}` + "\n" +
            "Point 17 Rayones y Abolladuras "      + " = " + boxpoint[17] + " --> " + `${boxpoint[17] == 0 ? 'Fail' : 'Pass'}` + "\n" +""
    
        boxpoint =
            "&Point1" + "," + boxpoint[1] +
            "&Point2" + "," + boxpoint[2] +
            "&Point3" + "," + boxpoint[3] +
            "&Point4" + "," + boxpoint[4] +
            "&Point5" + "," + boxpoint[5] +
            "&Point6" + "," + boxpoint[6] +
            "&Point7" + "," + boxpoint[7] +
            "&Point8" + "," + boxpoint[8] +
            "&Point9" + "," + boxpoint[9] +
            "&Point10" + "," + boxpoint[10] +
            "&Point11" + "," + boxpoint[11] +
            "&Point12" + "," + boxpoint[12] +
            "&Point13" + "," + boxpoint[13] +
            "&Point14" + "," + boxpoint[14] +
            "&Point15" + "," + boxpoint[15] +
            "&Point16" + "," + boxpoint[16] +
            "&Point17" + "," + boxpoint[17] 

        await logsaving(logarray, sn)
        if(resultado){
            await renombra(sn)
        }
        
        //console.log(logarray)
        await sleep(300)
        socket.emit('Writing', '16@', sn,0)
        await sleep(300)
        resolve('resolved')
    })
}

//**************************Funcion para resultado final de evaluacion
function plc_response2(responsevalue) {
    return new Promise(async resolve => {
        socket.emit('plc_response2', responsevalue)
        resolve('resolved')
    })
}

//**************************FUNCIONES DEBUG 
function canbughide() {
    return new Promise(async resolve => {
        document.getElementById('CanvasFHD').style.visibility = "hidden"
        document.getElementById('Canvascut1').style.visibility = "hidden"
        document.getElementById('Canvascut2').style.visibility = "hidden"
        document.getElementById('Canvascut3').style.visibility = "hidden"
        document.getElementById('Canvascut4').style.visibility = "hidden"
        document.getElementById('Canvascut5').style.visibility = "hidden"
        document.getElementById('Canvascut6').style.visibility = "hidden"
        document.getElementById('Canvascut7').style.visibility = "hidden"
        document.getElementById('Canvascut8').style.visibility = "hidden"
        document.getElementById('Canvascut9').style.visibility = "hidden"
        document.getElementById('Canvascut10').style.visibility = "hidden"
        document.getElementById('Canvascut11').style.visibility = "hidden"
        document.getElementById('Canvascut12').style.visibility = "hidden"
        document.getElementById('Canvascut13').style.visibility = "hidden"
        document.getElementById('Canvascut14').style.visibility = "hidden"
        document.getElementById('Canvascut15').style.visibility = "hidden"
        document.getElementById('Canvascut16').style.visibility = "hidden"
        document.getElementById('Canvascut17').style.visibility = "hidden"
        //document.getElementById('Canvascut').style.visibility = "hidden"
        resolve('resolved')
    });
}
function canbugshow() {
   // document.getElementById('Canvascut1').style.visibility = "hidden"
}

//*************************FUNCIONES PARA CAMARAS
async function open_cam(point, time) {
    return new Promise(async resolve => {
        let camid
        if (point == 3) { camid = "1ca7633b83732f2490414d6e6e99c073b07e495434ae07063643a4881b265088" }
        if (point == 2) { camid = "66fbc707a94534862d4df906684d5cabfde6e17e913511c225269785f6ef142c" }
        if (point == 1) { camid = "3be3a7c5454776901d302ae2c10fd6e6300372fa7d96cf231d723bb621139105" }
        const vgaConstraints = {
            video: {
                width: { ideal: 1080 },
                "frameRate": 30,
                "resizeMode": "crop-and-scale",
                deviceId: camid
            }
        }
        let objetomedia = navigator.mediaDevices.getUserMedia(vgaConstraints)
        await objetomedia.then((stream) => { video.srcObject = stream })
        setTimeout(function fire() { resolve('resolved');}, time) //console.log("Open cam fired")
    })
}
async function captureimage(point) {
    return new Promise(async resolve => {

        const video = document.getElementById("video")

        fullimagectx.drawImage(video, 0, 0, fullimage.width, fullimage.height) // Dibuja en el fullimage la captura de la imagen 1
        //console.log("estoy en el canvas")
        if(point!=17){
            capturedCanvasctx.drawImage(fullimage, 0, 0, capturedCanvas.width, capturedCanvas.height)
        }
        setTimeout(function fire() { resolve('resolved'); }, 1000) //tiempo para el opencam
        //console.log("FHD Image captured")
        resolve('resolved')
    })
}
async function passtarjeta() {
    document.getElementById('tarjeta2').style.background = '#00ff40'
    pass()
}
async function failtarjeta() {
    document.getElementById('tarjeta2').style.background = '#cf010b'
    fail()
}
function mapcams() {
    navigator.mediaDevices.enumerateDevices()
        .then(devices => {
            const filtered = devices.filter(device => device.kind === 'videoinput');
            //console.log('Cameras found', filtered);
        });
}
function stopcam() {
    return new Promise(async resolve => {
        const video = document.querySelector('video');
        // A video's MediaStream object is available through its srcObject attribute
        const mediaStream = video.srcObject;
        // Through the MediaStream, you can get the MediaStreamTracks with getTracks():
        const tracks = mediaStream.getTracks();
        tracks.forEach(track => { track.stop() })//;console.log(track);
        setTimeout(function fire() { resolve('resolved'); }, 1000);
    });//Cierra Promise principal
}
async function pause() {
    return new Promise(async resolve => {
        setTimeout(function pausea() { resolve('resolved') }, 3000)
    })
}

//*************************FUNCIONES DE GUARDADO DE IMAGENES
async function snapshot(step, sn) {
    //console.log('guardar la imagen en su carpeta.')
    return new Promise(async resolve => {
        var dataURI = fullimage.toDataURL('image/jpeg')
        savepic(dataURI, step, sn)
        resolve('resolved')
    })
}
async function URIimage(cut, photo, status) {
    var dataURI = cut.toDataURL('image/jpeg'); //convierte la imagen
    var valor = parseInt(Math.random() * (100 ** 10))
   socket.emit('picsaving', dataURI, valor, photo, status); //se llama la funcion savepic con los 3 parametros (conversion de imagen, numero de serial declarado previamente y samples que sera el point)
}
function savepic(uri, point, snr) {
    const socket = io()
    socket.emit('picsaving', uri, point, snr)
}

function savepic2(uri, point, snr) {
    const socket = io();
    var random=Math.floor(Math.random()*1000)
    //console.log( random+' ' +point)
    socket.emit('picsaving2', uri, random, point);
}

async function renombra(serial) {
    return new Promise(async resolve => {
    socket.emit('renombrasnr', serial);
    resolve('resolved')
});
}
async function logsaving(logarray, serial) {
    return new Promise(async resolve => {
        socket.emit('logsaving',logarray,serial);
        resolve('resolved')
    });
}

/****************************IA  */
//FUNCIONES DE IA
//*************Segmentacion 
async function predict1(point,canvas) {
    return new Promise(async resolve => {
        fullimage = document.getElementById('CanvasFHD')
           Bucle=0
            
        switch(point){  
        case 1:  
            input_size = modelp1.input_size
         image = tf.browser.fromPixels(fullimage, 3)
        image = tf.image.resizeBilinear(image.expandDims(), [input_size, input_size])
            let predictP1 = await modelp1.executeAsync(image)
            await highlightResults(predictP1, point,0.001) 
        break
        case 2: //Entrenamiento independiente 
        input_size = modelp2.input_size
        image = tf.browser.fromPixels(fullimage, 3)
        image = tf.image.resizeBilinear(image.expandDims(), [input_size, input_size])
            let predictP2 = await modelp2.executeAsync(image)
            await highlightResults(predictP2, point,0.001) 
        break
        case 3:
            input_size =modelp3.input_size
        image = tf.browser.fromPixels(fullimage, 3)
        image = tf.image.resizeBilinear(image.expandDims(), [input_size, input_size])
            let predictP3 = await modelp3.executeAsync(image)
            await highlightResults(predictP3, point,0.001) 
        break
        case 4:
            input_size = modelp4.input_size
        image = tf.browser.fromPixels(fullimage, 3)
        image = tf.image.resizeBilinear(image.expandDims(), [input_size, input_size])
            let predictP4 = await modelp4.executeAsync(image)
            await highlightResults(predictP4, point,0.001)     
        break
        case 5:
            input_size = modelp5.input_size
        image = tf.browser.fromPixels(fullimage, 3)
        image = tf.image.resizeBilinear(image.expandDims(), [input_size, input_size])
            let predictP5 = await modelp5.executeAsync(image)
            await highlightResults(predictP5, point,0.001) 
        break
        case 6:
            input_size = modelp6.input_size
        image = tf.browser.fromPixels(fullimage, 3)
        image = tf.image.resizeBilinear(image.expandDims(), [input_size, input_size])
            let predictP6 = await modelp6.executeAsync(image)
            await highlightResults(predictP6, point,0.001)  
        break
        case 7:
            input_size = modelp7.input_size
        image = tf.browser.fromPixels(fullimage, 3)
        image = tf.image.resizeBilinear(image.expandDims(), [input_size, input_size])
            let predictP7 = await modelp7.executeAsync(image)
            await highlightResults(predictP7, point,0.001)
        break
        case 8:
            input_size = modelp8.input_size
        image = tf.browser.fromPixels(fullimage, 3)
        image = tf.image.resizeBilinear(image.expandDims(), [input_size, input_size])
            let predictP8 = await modelp8.executeAsync(image)
            await highlightResults(predictP8, point,0.001) 
        break
        case 9:
            input_size =modelp9.input_size
        image = tf.browser.fromPixels(fullimage, 3)
        image = tf.image.resizeBilinear(image.expandDims(), [input_size, input_size])
            let predictP9 = await modelp9.executeAsync(image)
            await highlightResults(predictP9, point,0.001) 
        break
        case 10:
            input_size = modelp10.input_size
        image = tf.browser.fromPixels(fullimage, 3)
        image = tf.image.resizeBilinear(image.expandDims(), [input_size, input_size])
            let predictP10 = await modelp10.executeAsync(image)
            await highlightResults(predictP10, point,0.001) 
        break
        case 11:
            input_size = modelp11.input_size
        image = tf.browser.fromPixels(fullimage, 3)
        image = tf.image.resizeBilinear(image.expandDims(), [input_size, input_size])
            let predictP11 = await modelp11.executeAsync(image)
            await highlightResults(predictP11, point,0.001) 
        break
        case 12:
            input_size = modelp12.input_size
        image = tf.browser.fromPixels(fullimage, 3)
        image = tf.image.resizeBilinear(image.expandDims(), [input_size, input_size])
            let predictP12 = await modelp12.executeAsync(image)
            await highlightResults(predictP12, point,0.001) 
        break
        case 13:
            input_size = modelp13.input_size
        image = tf.browser.fromPixels(fullimage, 3)
        image = tf.image.resizeBilinear(image.expandDims(), [input_size, input_size])
            let predictP13 = await modelp13.executeAsync(image)
            await highlightResults(predictP13, point,0.001) 
        break
        case 14:
            input_size = modelp14.input_size
        image = tf.browser.fromPixels(fullimage, 3)
        image = tf.image.resizeBilinear(image.expandDims(), [input_size, input_size])
            let predictP14 = await modelp14.executeAsync(image)
            await highlightResults(predictP14, point,0.001)   
        break
        case 15:
            input_size =modelp15.input_size
        image = tf.browser.fromPixels(fullimage, 3)
        image = tf.image.resizeBilinear(image.expandDims(), [input_size, input_size])
            let predictP15 = await modelp15.executeAsync(image)
            await highlightResults(predictP15, point,0.001)
            console.log("entre a p15")    
        break
        case 16:
            input_size = modelp16.input_size
        image = tf.browser.fromPixels(fullimage, 3)
        image = tf.image.resizeBilinear(image.expandDims(), [input_size, input_size])
            let predictP16 = await modelp16.executeAsync(image)
            await highlightResults(predictP16, point,0.001)
            console.log("entrenamiento 16") 
        break
        case 17:
            input_size = modelp17.input_size
            image = tf.browser.fromPixels(fullimage, 3)
            image = tf.image.resizeBilinear(image.expandDims(), [input_size, input_size])
            let predictP17 = await modelp17.executeAsync(image)
            await highlightResults(predictP17, point,0.001)
            console.log("entrenamiento 17") 
        case 18:
                input_size = modelp18.input_size
                image = tf.browser.fromPixels(recortito17, 3)
                image = tf.image.resizeBilinear(image.expandDims(), [input_size, input_size])
                let predictP18 = await modelp18.executeAsync(image)
                await highlightResults(predictP18, point,0.5)
                console.log("entrenamiento 17") 
        break
        default: 
    }
        resolve('resolved') 
    });
}

async function highlightResults(predictions, point, criterio) {
    //console.log(predictions)
    statusf=1
    for (let n = 0; n < predictions[0].length && Bucle==0; n++) {
    console.log("Prediction:" + predictions[1][n])
        // Check scores
        if (predictions[1][n] > criterio) {
            Bucle=1
            if(point==18){
                Bucle=0
                statusf=0
            }
            bboxLeft = (predictions[0][n][0] * fullimagectx.canvas.width)
            bboxTop = (predictions[0][n][1] * fullimagectx.canvas.height) 
            bboxWidth = (predictions[0][n][2] * fullimagectx.canvas.width) - bboxLeft
            bboxHeight = (predictions[0][n][3] * fullimagectx.canvas.height) - bboxTop
            coord1.push(bboxLeft)
            coord1.push(bboxTop)
            coord1.push(bboxWidth)
            coord1.push(bboxHeight)
            
            bboxLeft1 = (predictions[0][n][0] * capturedCanvasctx.canvas.width)
            bboxTop1 = (predictions[0][n][1] * capturedCanvasctx.canvas.height) 
            bboxWidth1 = (predictions[0][n][2] * capturedCanvasctx.canvas.width) - bboxLeft1
            bboxHeight1 = (predictions[0][n][3] * capturedCanvasctx.canvas.height) - bboxTop1

            capturedCanvasctx.strokeStyle = 'yellow'; // Adjust color as needed #00FFFF
            capturedCanvasctx.lineWidth = 3; // Adjust line width as needed
            capturedCanvasctx.strokeRect(bboxLeft1, bboxTop1, bboxWidth1, bboxHeight1);
           //console.log('Coordinates:', bboxLeft, bboxTop, bboxWidth, bboxHeight);
        }
       // canvas.drawImage(fullimage,coord1[0],coord1[1],coord1[2],coord1[3],0,0,canvas.width,canvas.height)
    }
    //console.log('cordenada', coord1)
}

//************+*Clasificacion
async function mlinspector(cut, array,pot) {
    return new Promise(async resolve => { // inicio de promesa 
        //console.log('array', array)
        await call(cut, array,pot)
        //console.log(cut,array,pot)
        resolve('resolved')
    })
}
async function call(cut, array,pot) {
        switch(pot){  
        case 1:
            result = await modelClasP1.executeAsync(cut)
        break
        case 2:
            result = await modelClasP2.executeAsync(cut)
        break
        case 3:
            result = await modelClasP3.executeAsync(cut)
        break
        case 4:
            result = await modelClasP4.executeAsync(cut)
        break
        case 5:
            result = await modelClasP5.executeAsync(cut)
        break
        case 6:
            result = await modelClasP6.executeAsync(cut)
        break
        case 7:
            result = await modelClasP7.executeAsync(cut)
        break
        case 8:
            result = await modelClasP8.executeAsync(cut)
        break
        case 9:
            result = await modelClasP9.executeAsync(cut)
        break
        case 10:
            result = await modelClasP10.executeAsync(cut)
        break
        case 11:
            result = await modelClasP11.executeAsync(cut)
        break
        case 12:
            result = await modelClasP12.executeAsync(cut)
        break
        case 13:
            result = await modelClasP13.executeAsync(cut)
        break
        case 14:
            result = await modelClasP14.executeAsync(cut)
        break
        case 15:
            result = await modelClasP15.executeAsync(cut)
         
        break
        case 16:
            console.log("entre a clasificacion 16")
            result = await modelClasP16.executeAsync(cut)
           
            break
        default:
        }
        falla = result[0][1]
        console.log('Valor de falla clasificacion',falla)
        pasa = result[0][0]
        console.log('Valor de pasa clasificacion',pasa)
        if (pasa >= falla && array != null) { //Evalua el valor en la posicion 0 que da la redneuronal
            statusf = 1
            console.log("pass -> "+ "Punto: "+ pot, statusf)
        } else {
            statusf = 0
            console.log("fail -> "+ "Punto: "+ pot, statusf)
        }
}
