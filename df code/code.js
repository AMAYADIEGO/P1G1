
function factorialN() {
    var N = prompt("Ingrese N", 3)
    var i = 1
    var resp = 1
    if (N >= 0) {
        if (N == 0) {
            alert("El factorial de N es " + resp)
        } else {
            while (N >= i) {
                resp = resp * i
                i = i + 1
            }
            alert("Fctorial de N es: " + resp)
        }
    } else {
        alert("No factorial de un negativo")

    }
}
function mayorAyB(){
    var A = parseInt(prompt("Ingrese A",10))
    var B = parseInt(prompt("ingrese B",7))
    if(A == B){
        alert("son iguales")
    }else{
        if(A > B){
            alert("el mayor es A:" + A)
    }else {
        alert("el mayor es B: ", + B)
    }
    } 
}

function menorAyB(){
    var A = parseInt(prompt("Ingrese A",4))
    var B = parseInt(prompt("ingrese B",8))
    if(A == B){
        alert("son iguales")
    }else{
        if(A < B){
            alert("el menor es A:" + A)
    }else {
        alert("el menor es B: ", + B)
    }
    } 
}

function obtenerDIV(){
    var A = parseInt(prompt("Ingrese A",10))
    var B = parseInt(prompt("Ingrese B",7))
    var resultado
    resultado = A / B
    alert(parseInt(resultado))
}

function obtenerMOD(){
    var A = parseInt(prompt("Ingrese A",10))
    var B = parseInt(prompt("Ingrese B",7))
    var resultado
    resultado = A % B
    alert(parseInt(resultado))
}
function obtenerDigitoN(){
    var N = parseInt(prompt("Ingrese A",10))
    var resp = 0
    var cantidad = 0
    while (N != 0){
        N = parseInt(N/10)
        cantidad = cantidad + 1
        alert(N)
    }
    alert("digitos" + cantidad)
}
function mostrarDigitoN(){
    var N = parseInt(prompt("Ingrese N",10))
    var dig = 0
    while (N != 0) {
       dig = parseInt(N % 10)
        alert(dig)
        N = parseInt(N / 10)
    }
}
function  existeDig3enN(){
    var N = parseInt(prompt("Ingrese N",10))
    var dig = 0
    while (N != 0) {
       dig = parseInt(N % 10)
        if(dig == 3)
       alert("existe el dig 3")
    }
    N = parseInt(N / 10)
}
function calcularTrapecio(){
    var h = parseInt(prompt("ingrese h ",10))
    var b = parseInt(prompt("ingrese h",5))
    var B = parseInt(prompt("ingrese h ",15))
    var a = parseInt(prompt("ingrese h",10))
    var c = parseInt(prompt("ingrese h ",7))
    var area = 0
    var perimetro = 0
    area = ((b + B ) / 2) + h
    perimetro = a + b + B + c
    alert ("El perimetro es :" + area )
    alert ("El perimetro es:" + perimetro) 
}
function DeterminarsiNesparoimpar(){
    var N = parseInt(prompt("Ingrese N"))
    if ((N % 2) == 0){
        alert(N + "Es par")
    } else {
        alert(N + "Es impar")
    }
}

function ifNormal(){
    var N = parseInt(prompt("Ingrese N"))
    if (N > 5 ) {
        N = 10 
    }else {
        N = 1 
    }
    alert(N)
}

function ifAbreviado(){
    var N = parseInt(prompt("Ingrese N"))
    N = (N > 5) ? 10 : 1
    alert(N)
}
/*function obtenerDigitoN(){
    var N = parseInt(prompt("Ingrese A",10))
    var cantidad = 0
    while (N != 0){
        N = parseInt(N/10)
        cantidad = cantidad + 1
        alert(N)
    }
    alert("digitos" + cantidad)
}
*/

function obtenerCantidadDigN_FOR(){
    var N = parseInt(prompt("Ingrese N",))
    var cantidad = 0
    for (cantidad  = 0 ; N != 0; cantidad++) {
        N = parseInt(N / 10)
    }
    alert("digitos: " + cantidad)
}
    