/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.twitch.tv/videos/2212289583?t=00h17m45s
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function suma(a, b) {
  return a + b;
}

console.log(suma(7, 8));

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

let array3 = ["Hola", "Leydi"];

function strings(array) {
  return array.map((strings) => strings.toUpperCase());
}

console.log(strings(array3));

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function numPrimo(numero) {
  if (numero <= 1) return false;
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) return false;
  }
  return true;
}

console.log(numPrimo(4));

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
let one = [1, 2, 3, "Hola"];
let two = [1, 2, 3, 4, "Hola"];

function elementosComunes(array1, array2) {
  return array1.filter((elemento) => array2.includes(elemento));
}
let nuevoArray = elementosComunes(one, two);
console.log(nuevoArray);

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
let numbers = [1, 2, 3, 4, 5, 6];

function sumaPares(array) {
  return array.filter((num) => num % 2 === 0).reduce((a, b) => a + b, 0);
}
console.log(sumaPares(numbers));

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

function numeroAlCuadrado (array) {
  return array.map((num) => num ** 2);
}

let nuevoArrayAlCuadrado = numeroAlCuadrado(numbers)
console.log(nuevoArrayAlCuadrado);


// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// 10. Crea una función que calcule el factorial de un número dado
