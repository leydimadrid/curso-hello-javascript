/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Escribe un comentario en una línea

//Este es un comentario en una línea

// 2. Escribe un comentario en varias líneas
/*Este es un comentario en varias líneas,
Este es un comentario en varias líneas*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let texto = "Soy un string";
let numero = 10;
let verdadero = true;
let falso = false;
let nulo = null;
let undefined;
let bigint = 100000000000000000000000000000000000000000;
let simbolo = Symbol("Hola");

// 4. Imprime por consola el valor de todas las variables

console.log(texto, numero, verdadero, falso, nulo, undefined, bigint, simbolo);

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof texto);
console.log(typeof numero);
console.log(typeof verdadero);
console.log(typeof falso);
console.log(typeof nulo);
console.log(typeof undefined);
console.log(typeof bigint);
console.log(typeof simbolo);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
texto = "Soy otro string";
numero = 15;
verdadero = false;
falso = true;
nulo = null;
undefined;
bigint = 20000000000000000;
simbolo = Symbol("Hola soy otro symbol");

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
texto = 25;
numero = "Ahora soy un texto";
verdadero = "texto";
falso = "otro texto";
nulo = 28;
undefined;
bigint = "texto";
simbolo = null;

console.log("---------------------------");
console.log(texto);
console.log(numero);
console.log(verdadero);
console.log(falso);
console.log(nulo);
console.log(undefined);
console.log(bigint);
console.log(simbolo);

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

// const textoo = "Soy un string";
const numeroo = 10;
const verdaderoo = true;
const falsoo = false;
const nuloo = null;
const undefinedd = 'hola'
const bigintt = 100000000000000000000000000000000000000000;
const simboloo = Symbol("Hola");

console.log("---------------------------");

// 9. A continuación, modifica los valores de las constantes
// textoo = "Soy otro";
// numeroo = 15;
// verdaderoo = false;
// falsoo = true;
// nuloo = 'texto';
// undefinedd = 'holaaaa'
// bigintt = 10000000000000000;
// simboloo = Symbol("Holaaaaa");

// console.log("---------------------------");
// console.log(textoo);
// console.log(numeroo);
// console.log(verdaderoo);
// console.log(falsoo);
// console.log(nuloo);
// console.log(undefinedd);
// console.log(bigintt);
// console.log(simboloo);

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarser
