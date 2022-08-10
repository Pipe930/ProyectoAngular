
console.log("Hola Mundo");

const idElemento = document.getElementById("contenido");

var nombre = "Felipe";

idElemento.innerHTML = [` <h1>${nombre}</h1> `]

var edad = 0;

function ValidarEdad(){
    edad = 18
    if(edad <= 18){
        console.log("Eres menor de edad");
    } else {
        console.log("Eres mayor de edad");
    }
}