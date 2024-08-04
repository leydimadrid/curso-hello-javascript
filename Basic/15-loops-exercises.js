/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.twitch.tv/videos/2212289583?t=00h17m45s
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

for (let i = 1; i <= 20; i++) {
  console.log(i);
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let suma = 0;
for (let i = 1; i <= 100; i++) {
  suma = suma + i;
  console.log(suma);
}

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

let numerosPares;
for (let i = 1; i < 50; i++) {
  if (i % 2 === 0) {
    numerosPares = i;
    console.log("Soy par", numerosPares);
  }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let names = ["Leydi", "Johana", "Samuel", "Brayan"];
names.forEach((element) => {
  console.log(element);
});

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let texto = "Hola soy un ejemplo de texto con vocales";
let contador = 0;
for (let i = 0; i < texto.length; i++) {
  if ("aeiouAEIOU".includes(texto[i])) {
    contador++;
  }
}
console.log(contador);

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let numbers = [1, 2, 3, 4, 5];
let producto = 1;
numbers.forEach((element) => {
  producto *= numbers[element];
  console.log(producto);
});

let multiplicacion = 1;

for (let i = 1; i < numbers.length; i++) {
  multiplicacion *= numbers[i];
  console.log("Soy la multiplicaciòn", multiplicacion);
}

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

// 8. Usa un bucle para invertir una cadena de texto

let cadena = "JavaScript";
let resultado = " ";
for (let i = cadena.length - 1; i >= 0; --i) {
  resultado += cadena[i];
}
console.log(resultado);

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let arrayFib = [0, 1];
for (let i = 2; i < 10; i++) {
  arrayFib.push(arrayFib[i - 1] + arrayFib[i - 2]);
}
console.log("Sencuencua Fibonacci", arrayFib);

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let arrayNumbers = [1, 4, 10, 12, 15, 16, 17];
let nuevoArray;
for (let i = 0; i < arrayNumbers.length; i++) {
  if (arrayNumbers[i] > 10) {
    nuevoArray = arrayNumbers[i];
    console.log(nuevoArray);
  }
}
