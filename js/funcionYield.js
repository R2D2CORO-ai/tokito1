//Yield del Lunes
async function yieldMonday(resulday){
    let datosday = resulday.result
    //console.log(datosday)
    if((resulday.day === 'Monday') && (resulday.status =='pass')){
        mondayPass = parseInt(datosday.rows[0].count,10)
        //console.log("Monday tiene"+mondayPass)
    }
    if((resulday.day === 'Monday') && (resulday.status =='fail')){
         mondayFail = parseInt(datosday.rows[0].count,10)
       // console.log("Monday tiene"+mondayFail)
    
        /*let sumaPFLunes = mondayPass + mondayFail
       // console.log("la suma de pf lunes es: "+sumaPFLunes)
        Yield = (mondayPass/sumaPFLunes)*100
       // console.log("Este es el Yield "+Yield.toFixed(2))
        
        if(day === 'Monday'){
        document.getElementById('output').innerHTML = "Yield Monday: " +Yield.toFixed(2) + "%"
        }else{
            //console.log("Hoy no es lunes")
        }*/
        
    }
}
//Yield del martes
async function yieldTuesday(resulday){
    let datosday = resulday.result
    if((resulday.day === 'Tuesday') && (resulday.status =='pass')){
        TuesdayPass = parseInt(datosday.rows[0].count,10)
       // console.log("Tuesday tiene"+TuesdayPass)
    }
    if((resulday.day === 'Tuesday') && (resulday.status =='fail')){
         TuesdayFail = parseInt(datosday.rows[0].count,10)
        //console.log("Tuesday tiene"+TuesdayFail)
    
       /* let sumaPFMartes = TuesdayPass + TuesdayFail
        //console.log("la suma de pf martes es: "+sumaPFMartes)
        Yield = (TuesdayPass/sumaPFMartes)*100
        //console.log("Este es el Yield de Tuesday "+Yield.toFixed(2))
        
        if(day === 'Tuesday'){
        document.getElementById('output').innerHTML = "Yield Tuesday: " +Yield.toFixed(2) + "%"
        }else{
            //console.log("Hoy no es Martes")
        }*/
        
    }
}
//Yield del miercoles
async function yieldWednesday(resulday){
    let datosday = resulday.result
    if((resulday.day === 'Wednesday') && (resulday.status =='pass')){
        WednesdayPass = parseInt(datosday.rows[0].count,10)
       // console.log("Wednesday tiene"+WednesdayPass)
    }
    if((resulday.day === 'Wednesday') && (resulday.status =='fail')){
        WednesdayFail = parseInt(datosday.rows[0].count,10)
      //  console.log("Wednesday tiene"+WednesdayFail)
    
       /* let sumaPFMiercoles = WednesdayPass + WednesdayFail
       // console.log("la suma de pf miercoles es: "+sumaPFMiercoles)
        Yield = (WednesdayPass/sumaPFMiercoles)*100
        //console.log("Este es el Yield de Tuesday "+Yield.toFixed(2))
        
        if(day === 'Wednesday'){
        document.getElementById('output').innerHTML = "Yield Wednesday: " +Yield.toFixed(2) + "%"
        }else{
           // console.log("Hoy no es Miercoles")
        }*/
        
    }
}
//Yield del jueves

async function yieldThursday(resulday){
    let datosday = resulday.result
    if((resulday.day === 'Thursday') && (resulday.status =='pass')){
        ThursdayPass = parseInt(datosday.rows[0].count,10)
        //console.log("Thursday tiene"+ThursdayPass)
    }
    if((resulday.day === 'Thursday') && (resulday.status =='fail')){
        ThursdayFail = parseInt(datosday.rows[0].count,10)
       //console.log("Thursday tiene"+ThursdayFail)
    
        /*let sumaPFJueves = ThursdayPass + ThursdayFail
        //console.log("la suma de pf jueves es: "+sumaPFJueves)
        Yield = (ThursdayPass/sumaPFJueves)*100
       // console.log("Este es el Yield de Thursday "+Yield.toFixed(2))
        
        if(day === 'Thursday'){
        document.getElementById('output').innerHTML = "Yield Thursday: " +Yield.toFixed(2) + "%"
        }else{
          //  console.log("Hoy no es Jueves")
        }*/
        
    }
}

//Yield del viernes

async function yieldFriday(resulday){
    let datosday = resulday.result
    
    if((resulday.day === 'Friday') && (resulday.status =='pass')){
        FridayPass = parseInt(datosday.rows[0].count,10)
        //console.log("Friday tiene "+FridayPass)
    }
    if((resulday.day === 'Friday') && (resulday.status =='fail')){
        FridayFail = parseInt(datosday.rows[0].count,10)
        //console.log("Friday tiene "+FridayFail)
    
        /*let sumaPFViernes = FridayPass + FridayFail
        //console.log("la suma de pf viernes es: "+sumaPFViernes)
        Yield = (FridayPass/sumaPFViernes)*100
        //console.log("Este es el Yield de Friday "+Yield.toFixed(2))
        
        if(day === 'Friday'){
        document.getElementById('output').innerHTML = "Yield Friday: " +Yield.toFixed(2) + "%"
        }else{
           // console.log("Hoy no es Viernes")
        }*/
        
    }
}

//Yield del sabado

async function yieldSaturday(resulday){
    let datosday = resulday.result
    if((resulday.day === 'Saturday') && (resulday.status =='pass')){
        SaturdayPass = parseInt(datosday.rows[0].count,10)
       // console.log("Saturday tiene "+SaturdayPass)
    }
    if((resulday.day === 'Saturday') && (resulday.status =='fail')){
        SaturdayFail = parseInt(datosday.rows[0].count,10)
        //console.log("Saturday tiene "+SaturdayFail)
    
       /* let sumaPFSabado = SaturdayPass + SaturdayFail
       // console.log("la suma de pf sabado es: "+sumaPFSabado)
        Yield = (SaturdayPass/sumaPFSabado)*100
       // console.log("Este es el Yield de Saturday "+Yield.toFixed(2))
        
        if(day === 'Saturday'){
        document.getElementById('output').innerHTML = "Yield Saturday: " +Yield.toFixed(2) + "%"
        }else{
           // console.log("Hoy no es Sabado")
        }*/
        
    }
}

//Yield del domingo

async function yieldSunday(resulday){
    let datosday = resulday.result
    if((resulday.day === 'Sunday') && (resulday.status =='pass')){
        SundayPass = parseInt(datosday.rows[0].count,10)
        //console.log("Sunday tiene "+SundayPass)
    }
    if((resulday.day === 'Sunday') && (resulday.status =='fail')){
        SundayFail = parseInt(datosday.rows[0].count,10)
       // console.log("Sunday tiene "+SundayFail)
    
        /*let sumaPFDomingo = SundayPass + SundayFail
        //console.log("la suma de pf domingo es: "+sumaPFDomingo)
        Yield = (SundayPass/sumaPFDomingo)*100
       // console.log("Este es el Yield de Sunday "+Yield.toFixed(2))
        
        if(day === 'Sunday'){
        document.getElementById('output').innerHTML = "Yield Sunday: " +Yield.toFixed(2) + "%"
        }else{
           // console.log("Hoy no es Domingo")
        }*/
        
    }
}
