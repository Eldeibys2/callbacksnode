//declarando la funcion sumar

function sumar(num1,num2,callback) {
    let suma = num1 + num2
    callback(suma)
}
//llamar a la funcion sumar
sumar(5,10,function (parametro) {
    console.log("La suma es: "+parametro)
})