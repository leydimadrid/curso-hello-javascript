/*
Clase 3 en vídeo | 24/07/2024
Condicionales, arrays y sets
https://www.twitch.tv/videos/2206228701?t=00h16m02s
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let name = "leydi";
if (name === "leydi") {
  console.log("Mi nombre es Leydi");
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let users = {
  user: "Leydi",
  password: 123,
};

if (users.user == "Leydi" && users.password == 123) {
  console.log("Bienvenida Leydi");
} else {
  console.log("Usuario incorecto 😕");
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let number = 5;
if (number > 0) {
  console.log("El número es positivo");
} else if (number < 0) {
  console.log("El numero es negativo");
} else {
  console.log("El número es cero");
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let persona = 15;
let edadMinima = 18;

if (persona >= edadMinima) console.log("Puedes votar");
else {
  const añosQueFaltan = edadMinima - persona;
  console.log(
    `La persona tiene ${persona} y no puede votar, le faltan ${añosQueFaltan} años`
  );
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad

let edad = 18;

console.log(edad >= 18 ? "Adulto" : "Menor");

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = "Abril";

if (mes == "Abril") {
  console.log("Oh no! We are in Winter");
} else {
  console.log("We are in Spring");
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

let mesAno = 7;

if (mesAno === 2 || mesAno === 3 || mesAno === 4) {
  console.log("Este mes tiene 28 días");
} else if (mesAno === 5 || mesAno === 6 || mesAno === 7) {
  console.log("Este mes tiene 30 días");
}

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let language = "Spanish";
let greeting;

switch (language) {
  case "French":
    greeting = "Salut";
    break;
  case "Spanish":
    greeting = "Hola";
    break;
  case "English":
    greeting = "Hello";
    break;
}

console.log(greeting);

// 9. Usa un switch para hacer de nuevo el ejercicio 6

let estacion;

switch (mes) {
  case "Abril":
    estacion = "Oh no! We are in Winter";
    break;
  case "Mayo":
    estacion = "We are in Spring";
}

console.log(estacion);

// 10. Usa un switch para hacer de nuevo el ejercicio 7

let numeroDias;

let prompt = require("prompt-sync")({ sigint: true });
let input = parseInt(prompt("Escribe un el número de un mes del año: "));

switch (input) {
  case 1:
  case 3:
  case 4:
  case 5:
  case 6:
  case 7:
  case 8:
    return console.log("Este mes tiene 31 días");
  case 9:
  case 10:
  case 11:
  case 12:
    return console.log("Este mes tiene 30 días");
  case 2:
    return console.log("Este mes tiene 28 días");
}
