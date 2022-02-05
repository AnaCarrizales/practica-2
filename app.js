// function greet()
// {
//     console.log(`Hello`);
// }
// greet();

// Función refactorizada a la especificación ES6
let greet = () => console.log(`Hello`) //ejecuta el mensaje "Hello"
greet(); //invoca la función greet

// function logGreeting(fn) 
// {
//     fn();
// }

//función como parámetro
// Función refactorizada a la especificación ES6
let logGreeting = (fn) => fn(); //fn es un argumento para invocar la función
logGreeting(greet);
// la función greet se utiliza como parámetro

//function expression
// Función refactorizada a la especificación ES6
let greetMe = () => console.log(`Hello from the function expression`);
greetMe();

logGreeting(greetMe);

let x=2;
let cuadrado = (x) => x*x;
console.log(`${cuadrado(2)}`);
