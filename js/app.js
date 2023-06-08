// Almaceno valores

let número;

// Asigno un dato a una vriable 

número = 2023; // Número almacena La - placita - Pañalera

// Datos

let frase;
frase = "La placita - Pañalera";

// Inicializo variables

let numero = 2023;

// Constante

const PI = 6;

// Operación con strings

let texto1 = 'La placita';
let texto2 = ' - Pañalera';

let texto3 = texto1 + texto2; // 'La placita - Pañalera'

// Visualización de datos en la consola
let numero3 = 2023;
let txt = 'La placita - Pañalera'

console.log(txt);
console.log(numero3);


// Declaración de la función 
function saludar () {
    alert('Hola como va!')
}

// Agrego popup

alert('Te vamos a pedir que ingreses el correo electronico');

let correo = prompt('Ingrese su correo electronico');

if (correo) {
    correo = prompt('Ingrese su correo electrónico');
    console.log('Verificando correo electrónico');
}else {
    alert('Por favor ingresar correo electrónico en el caso de no haberlo hecho');
}

// Tipo de dato booleano

let dato = true; // Tipo de dato booleano
dato = false; // tipo de dato booleano

if (true){
    console.log('Correo ingresado')
}

// Operadores de comparación

let a = 'Correo ingresado';
let b = 'Correo ingresado';
let resultado = a == b;

console.log(resultado);

if (a == b) {
    console.log('Correo ingresado')
}

// Estrictamente distinto
// resultado = a !== b;
// console.log(resultado);

resultado = a !== b;
console.log(resultado);

if (a !==b) {
    console.log('Son distintos')
}

// Para que necesita comprar en la pañalera

let necesidad = prompt ('Ingrese ingrese la palabra Madre si es para su hijo o ingrese la palabra Adulto si es para algun familiar')
const Madre = 'Madres que necesitan pañales o accesorios para bebés';

if (necesidad >= Madre) {
    console.log ('Le mostraremos nuestros productos para bebés') 
}else {
    console.log('Le mostraremos productos para adultos')
}

