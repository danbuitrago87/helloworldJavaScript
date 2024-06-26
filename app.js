let numSecret=5; //declaración de variable
//pedimos al usuarioun número
let numeroUsuario=prompt("Digita un número por favor: ")
console.log(numeroUsuario)
if (numSecret==numeroUsuario){
    alert("El número es correcto...");
} else{
    //    DOS MANERAS DE MOSTRAR VALORES GUARDADOS
    //alert("El número que elegiste es: " + numeroUsuario + " \nEl número correcto es: " + numSecret);
    alert(`El número que elegiste es: ${numeroUsuario} \nEl número correcto es: ${numSecret}`);
}
