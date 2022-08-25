let numero = Number(prompt("Eliga un numero hasta 10, para ganar un descuento. Tienes 2 intentos"));
let counter = 0;

while (numero !== 3 && counter < 1) {
    alert("Segui participando");
    numero = Number(prompt("Eliga un numero hasta 10, para ganar un descuento. Te queda un intento"));
    counter++;
} if (numero == 3) {
    alert("Ganaste un % 50 de descuento");
} 
  else {
    alert("te quedaste sin intentos");
}





const valor = Number(prompt("Por favor, ingresa un numero"));

for (let i = 0; i < 10; i++) {
    const resultado = i + valor;
    console.log("El resultado de " + i + " + " + valor + " es " + resultado);
}





for (let i = 1; i <= 5; i++) {
    let ingresarNombre = prompt("Ingrese su nombre");
    alert("El cliente numero " + i + " es " + ingresarNombre);
   if (i >= 5) {
    alert("No hay mas numeros para clientes");
    break;
   } 
}


