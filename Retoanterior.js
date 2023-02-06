// - Declarar las funciones de la calculadora por separado (suma, resta, producto, división)
(console.log("***** FUNCIONES SEPARADAS"))
function sum (op1, op2, op3) {
//    let resultado = op1 + op2
    return op1 + op2 + op3; //return resultado
} 
console.log(sum (2, 1, 4));

function subs (op1, op2){
    //    let resultado = op1 - op2
   return op1 - op2; //return resultado
}
console.log(subs (2, 1));

function mult (op1, op2){
    return op1 * op2;
}
console.log(mult (2, 1));

function div (op1, op2){
    return op1 / op2;
}
console.log(div (2, 1));

// - Al final del documento index.js escribir la sentencia:
// module.exports =
(console.log("****module exports"))
 module.exports =  { sum, subs, mult, div }
//  let myLib = require("./index") en fichero run.js
console.log("****RETO GIT")
//5. Añade a este archivo de funciones, una nueva función que haga el cuadrado de un numero

function numeroCuadrado (n){
    let resultado = n ** 2
    return resultado

}

console.log(numeroCuadrado(3));
