//Declarando a la funcuon

function saludar(){
    setTimeout(function () {
        console.log("hola")
        despedir() //llamando a despedir
    },1000)

}
function despedir() {//declarando a despedir
    console.log("adios")
}

saludar()//llamando a saludar
