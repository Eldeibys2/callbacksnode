function principal(name,secundaria){
    console.log("Hola "+name)
    secundaria()
}

principal("Deiby",function() {
    console.log("Ya desayunaste?")
})