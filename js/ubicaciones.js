
async function querytas(P1011,P1012,P2011,P2012,P3011,P3012,day,semana){
    return new Promise(async resolve => {
        const socket = io();
       // console.log("Datos de ubicaciones: ",P1011,P1012,P2011,P2012,P3011,P3012,day,semana )
        socket.emit('countas',P1011,P1012,P2011,P2012,P3011,P3012,day,semana)
        resolve('resolved');
    })
}
