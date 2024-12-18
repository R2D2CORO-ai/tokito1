
async function fail(canvas,indices){
  console.log("Aqui estoy en fail")
  return new Promise(async resolve => {
  Swal.fire({
    /*html:
    `<label>El error esta en la posicion </label> <label id="texto_nav1"></label> 
    <p></p> 
    <div'>
        <canvas id="CanvasSweet" width="168" height="168"></canvas>
    </div>`,
    title: "Es una unidad fallida?",*/
    timer: 2000,
    title: "Error",
    icon: "error",
    //showDenyButton: true,
    //denyButtonText: 'Fallo',
    confirmButtonColor: "#2a2",
    //denyButtonColor: "#a11",
    //confirmButtonText: "Es buena!!"
  })/*.then(async function(result){
    if (result.isConfirmed) {
       await modifyArrays(indices,1)
      resolve('resolved')
    }else if (result.isDenied) {
       await modifyArrays(indices,0)
      resolve('resolved')
    }
  });
  var objetivo = document.getElementById('texto_nav1');
  objetivo.innerHTML = indices[0]+1;
  const image = document.getElementById('CanvasSweet');
  const imagectx = image.getContext('2d');


  imagectx.drawImage(canvas, 0, 0, canvas.width, canvas.height);*/
  resolve('resolved')
})

}

async function pass(){
  return new Promise(async resolve => {
  Swal.fire({
    timer: 500,
    icon: 'success',
    title: 'Pass',
    
  })
  resolve('resolved')
})
}
