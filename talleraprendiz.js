//declarando la funcion
function crearAprendiz(nombre,planeta,edad,estatura,clasificarAprendiz) {
    let aprendiz = {
        nombre: nombre,
        planeta:planeta,
        edad:edad,
        estatura:estatura
    }
    clasificarAprendiz(aprendiz)
}
//llamando la funcion
crearAprendiz("Deiby","Tierra",14,1.75,function (aprendiz) {
    if(aprendiz.edad>=15){
        console.log("Usted se va para la clase de sable de luz")
    }else{
        console.log("Usted se va para la clase de sable de la fuerza")
    }
})