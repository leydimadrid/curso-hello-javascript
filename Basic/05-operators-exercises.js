/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Crea una variable para cada operación aritmética

let a = 4;
let b = 2;

let suma = a + b;
let resta = a - b;
let multiplicacion = a * b;
let division = a / b;
let modulo = a % b;
let exponente = a ** b;

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

suma = a += b;
resta = a -= b;
division = a /= b;
multiplicacion = a *= b;
modulo = a %= b;
exponente = a **= b;

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación

let numOne = 5;
let numTwo = 5;
let numThree = 4;
let numfour = 5;

const resultadoTrue1 = numOne === numTwo; // True
const resultadoTrue2 = numOne == numTwo; // True
const resultadoTrue3 = numOne <= numTwo; // True
const resultadoTrue4 = numOne >= numTwo; // True
const resultadoTrue5 = numThree < numfour; // True
console.log(
  resultadoTrue1,
  resultadoTrue2,
  resultadoTrue3,
  resultadoTrue4,
  resultadoTrue5
);

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

const resultadoFalse1 = numThree === numTwo; // False
const resultadoFalse2 = numOne !== numTwo; // False
const resultadoFalse3 = numOne > numTwo; // False
const resultadoFalse4 = numOne < numTwo; // False
const resultadoFalse5 = numThree == numfour; // False
console.log(
  resultadoFalse1,
  resultadoFalse2,
  resultadoFalse3,
  resultadoFalse4,
  resultadoFalse5
);

// 5. Utiliza el operador lógico and
console.log(`Soy el operador and y mi resultado es: ${numOne > numTwo && numThree < numfour}`);

// 6. Utiliza el operador lógico or
console.log(`Soy el operador or y mi resultado es: ${ numOne === numTwo || numOne !== numTwo}`);

// 7. Combina ambos operadores lógicos
console.log(`Combinación operadores and y or, mi resultado es: ${numThree == numfour && numOne >= numTwo || numfour === numOne }` );

// 8. Añade alguna negación
console.log(`Soy la negación: ${numOne != numThree} `);

// 9. Utiliza el operador ternario
console.log(`Soy el operador ternario: ${numOne == numThree ? 'Somos iguales 😀' : 'No somos iguales 😒'}`);

// 10. Combina operadores aritméticos, de comparáción y lógicas

let x = 5
let y = 10

let resultadoSuma = x + y
console.log(resultadoSuma);
let operacion = resultadoSuma === 15 || resultadoSuma < 10 ? 'Está perfecto 🖖' : 'No está tan bien'
console.log(operacion);