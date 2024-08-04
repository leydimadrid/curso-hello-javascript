/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Concatena dos cadenas de texto

let user = "Leydi";
let user2 = "Joana";
let lastName = "Madrid";
let fullName = `Mi nombre es ${user} y mi Apellido es ${lastName}`;
console.log(fullName);

// 2. Muestra la longitud de una cadena de texto

console.log(user.length);

// 3. Muestra el primer y último carácter de un string

console.log(user[0], user[4]);

// 4. Convierte a mayúsculas y minúsculas un string

console.log(user.toUpperCase(), lastName.toLowerCase());

// 5. Crea una cadena de texto en varias líneas

const poema = `Estoy demasiado feliz,
porque estoy aprendiendo JavaScript,
llevaba muchos años intentandolo`;

console.log(poema);

// 6. Interpola el valor de una variable en un string

let age = 26;
console.log(`Soy ${user} y tengo ${age} años `);


// 7. Reemplaza todos los espacios en blanco de un string por guiones

/* La expresión regular \s+ coincide con uno o más espacios en blanco (\s es un carácter de espacio 
en blanco y + indica que se debe coincidir con uno o más). El flag g al final de la expresión regular
 indica que se debe aplicar la sustitución a todas las ocurrencias, no solo a la primera.*/

console.log(fullName.replace(/\s+/g, "-"));

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(
  fullName.includes("Madrid") ? "Si contiene la palabra" : "No lo incluye"
);

// 9. Comprueba si dos strings son iguales

console.log(user === lastName);

// 10. Comprueba si dos strings tienen la misma longitud
console.log(user.length === user2.length);
