//MENSAJES EN PANTALLA
alert("BIENVENIDOS A NUESTRO SITIO WEB");

//DECLARACIÓN DE VARIABLES
//let nombre="luna";
//let edad=25;
let numventas=50;
let saldoDisponible=1000;
let mensajeError="Error,completa todos los campos";

//PETICIONES
let nombre=prompt("Digita tu nombre");
let edad = prompt("Digita la edad: ");

//COMPARACIONES
if (edad==="" || nombre===""){// si el dato es vacio mensaje de error
    alert(mensajeError);
}
if (edad>=18){
    alert("PUEDES OBTENER TU LICENCIA");
}else{
    alert("NO PUEDES OBTENER TU LICENCIA");
}

//MOSTRAMOS EN CONSOLA
console.log(nombre, edad, numventas, saldoDisponible);