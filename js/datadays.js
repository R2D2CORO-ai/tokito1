
async function passturno(){
    console.log("estoy en la funcion passturno")
    if (hora < 6) {
        //console.log("turno 3: " + hora)
        let status = 'pass'
        await mandarqueryt3(serial,status,day,fecha,semana,localTimeString)
    }
    if ((hora >= 6) && (hora <= 14)) { // Validacion para horario de T1
        //console.log("turno 1: " + hora)
        let status = 'pass'
        await mandarqueryt1(serial,status,day,fecha,semana,localTimeString)

    } else if ( (hora >=14) && (hora <= 22))  {
       // console.log("turno 2: " + hora)
        let status = 'pass'
        await mandarqueryt2(serial,status,day,fecha,semana,localTimeString)

    } else if ((hora == 23) || (hora != 23) && (hora <= 6) ) {
        //console.log("turno 3: " + hora)
        let status = 'pass'
        await mandarqueryt3(serial,status,day,fecha,semana,localTimeString)
    }
}




async function failturno(){
    if (hora < 6) {
        // console.log("turno 3: " + hora)
         let status = 'fail'
         await mandarqueryt3(serial,status,day,fecha,semana,localTimeString)
 
     }else if ( (hora >= 6) && (hora <= 14))  {
         //console.log("turno 1: " + hora)
         let status = 'fail'
         await mandarqueryt1(serial,status,day,fecha,semana,localTimeString)
 
     } else if ( (hora > 14) && (hora <= 22) ) {
         //console.log("turno 2: " + hora)
         let status = 'fail'
         await mandarqueryt2(serial,status,day,fecha,semana,localTimeString)
 
     }
     else if ((hora == 23) || (hora != 23) && (hora <= 6)) {
         //console.log("turno 3: " + hora)
         let status = 'fail'
         await mandarqueryt3(serial,status,day,fecha,semana,localTimeString)
     }
 }
 


//querys todos los turnos

async function mandarqueryt1(serial,status,day,fecha,semana,localTimeString) {
    return new Promise(async resolve => {
        let turno1 = 1
        socketconection(serial,status,day,fecha,semana,turno1,localTimeString)//manda si es fail o pass y el turno (1)
       // console.log("entre al mandarquery turno1" + day)
        resolve('resolved')
    })
}

async function mandarqueryt2(serial,status,day,fecha,semana,localTimeString) {
    return new Promise(async resolve => {
        let turno2 = 2
        socketconection(serial,status,day,fecha,semana,turno2,localTimeString)//manda si es fail o pass y el turno (2)
        //console.log("entre al mandarquery t2" + day)
        resolve('resolved')
    })
}

async function mandarqueryt3(serial,status,day,fecha,semana,localTimeString) {
    return new Promise(async resolve => {
        let turno3 = 3
        socketconection(serial,status,day,fecha,semana,turno3,localTimeString)//manda si es fail o pass y el turno (3)
       // console.log("entre al mandarquery t3" + day)
        resolve('resolved')
    })
}

//----- Ubicaciones -----//
async function ubicacion(){   
    if(boxpoint[1] == 1){
        P3011 = 'pass'
    }else if( boxpoint[1] == 0){
        P3011 = 'fail'
    }

    if(boxpoint[2] == 1){
        P3012 = 'pass'
    }else if(boxpoint[2] == 0){
        P3012 = 'fail'
    }

    if(boxpoint[3] == 1){
         P2011 = 'pass'
    }else if(boxpoint[3] == 0){
        P2011 = 'fail'
    }

    if(boxpoint[4] == 1){
        P2012 = 'pass'
    }else if(boxpoint[4] == 0){
        P2012 = 'fail'
    }

    if(boxpoint[5] == 1){
        P1011 = 'pass'
    }else if(boxpoint[5] == 0){
        P1011 = 'fail'
    }

    if( boxpoint[6] == 1){
        P1012 = 'pass'
    }else if(boxpoint[6] == 0){
        P1012 = 'fail'
    }
}

function socketconection(serial,status,day,fecha,semana,turno,localTimeString) {
    ubicacion()
    const socket = io();
    socket.emit('socketconection', serial,status,day,fecha,semana,turno,P1011,P1012,P2011,P2012,P3011,P3012,localTimeString)
}

