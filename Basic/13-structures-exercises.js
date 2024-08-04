/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.twitch.tv/videos/2212289583?t=00h17m45s
*/

// 1. Crea un array que almacene cinco animales

let animales = ["Oso", "Perro", "Gato", "León", "Caballo"]

// 2. Añade dos más. Uno al principio y otro al final

animales.unshift("Mico") // Principio
console.log(animales);
animales.push("Tigre") // Final
console.table(animales);


// 3. Elimina el que se encuentra en tercera posición
animales.splice(3,1)
console.table(animales);

// 4. Crea un set que almacene cinco libros

let mySet = new Set (["LibroUno", "LibroDos", "LibroTres", "LibroCuatro", "LibroCinco"])
console.log(mySet);


// 5. Añade dos más. Uno de ellos repetido

mySet.add("LibroSeis")
mySet.add("LibroUno")
console.log(mySet);


// 6. Elimina uno concreto a tu elección

mySet.delete("LibroDos")
console.log(mySet);

// 7. Crea un mapa que asocie el número del mes a su nombre

let myMap = new Map([[1, "Enero"], [2, "Febrero"], [3, "Marzo"], [4, "Abril"], [5, "Mayo"]])
console.log(myMap);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log( myMap.has(5));
console.log(myMap.get(5));

// 9. Añade al mapa una clave con un array que almacene los meses de verano

let verano = ["Junio", "Julio", "Agosto"]
myMap.set("Verano", verano)
console.log(myMap);


// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let arrayNumbers = [1, 2, 3, 4]
let arraysSet = new Set(arrayNumbers)
let otherMap = new Map([["Numbers", arraysSet]])
console.log(otherMap);
