// Ejercio 1.a
// const sueldo = prompt("Por favor ingrese su sueldo")
// const antiguedad = prompt("Por favor ingrese su antiguedad")

//Ejercicio 1.a.i
// const sueldoInferior2000 = Number(sueldo) < 2000 //F
// const antiguedad10 = Number(antiguedad) == 10 || Number(antiguedad) > 10 // V  || F = V
// const ejercicioa = sueldoInferior2000 && antiguedad10 // F && V = F
// console.log("respuesta 1.a: " + ejercicioa)

// // Ejercicio 1.a.ii
// // prueba 1 -> sueldo 3000 y antiguedad 10
// const antiguedadmenor10 = Number(antiguedad) < 10 //F
// const ejerciciob = sueldoInferior2000 || antiguedadmenor10  // F || F = F
// console.log("respuesta 1.b: "+ ejerciciob)

// //Ejercicio 1.a.iii
// // prueba 1 -> sueldo 3000 y antiguedad 10
// const ejercicioc = !sueldoInferior2000
// console.log("respuesta ejercicio 1.c: "+ejercicioc)

//Ejercio 1.b
// const valorCompra = prompt("Ingrese el valor de la compra");
// const valorCompraMayor100000 = Number(valorCompra) > 100000 || Number(valorCompra) == 100000;
// console.log("La compra tiene descuento : " + valorCompraMayor100000);

//Ejercicio 1.c
// const numero = prompt("Ingrese el numero");
// const esMultiplo2 = numero % 2 == 0;
// console.log(esMultiplo2);

//Ejercicio 1.d
// const nombre = prompt("Ingrese el nombre del empleado");
// const salario = prompt("Ingrese el salario basico por hora");
// const horasTrabajadas = prompt("Ingrese el numero de horas trabajadas en el mes");
// //Ejercicio 1.d.i.
// const salarioBasico = Number(salario) * Number(horasTrabajadas);
// //Ejercicio 1.d.ii.
// const subsidio = Number(salarioBasico) == 700000 || Number(salarioBasico) < 700000;
// //Ejercicio 1.d.iii.
// console.log("El nombre del empleado es : " + nombre + ",su salario es : " + salarioBasico + " recibe subsidio :" + subsidio);

//Ejercicio 1.e
// const letra = prompt("Ingrese la letra");
// const vocal = letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u";
// console.log("La letra ingresada es una vocal : " +vocal);

//Ejercicio 1.f
// const pasaporte = prompt("Ingrese el primer digito del pasaporte");
// const nacionales = pasaporte == "A";
// console.log("El pasaporte ingresado es nacional : " + nacionales);

//Ejercicio 2
// let a = 4;
// let b = 7;
// let c = 2 * b;
// let x = a;
// let y = 3 * x;
// let u = 6;
// let w = 10;
// let z = 8;
// //Ejercicio 2.a
// const puntoa = a / (b * c);
// console.log(puntoa);
// //Ejercicio 2.b
// const potenciauno = Math.pow(a, 2);
// const potenciados = Math.pow(b, 92);
// const resultado = potenciauno + potenciados;
// console.log(resultado);
// //Ejercicio 2.c
// const puntoc = (x + y) / (u + w / a);
// console.log(puntoc);
// //Ejercicio 2.d
// const puntod = (x / y) * (z + w);
// console.log(puntod);

//Ejercicio 3
const ptrue = true;
const pfalse = false;
const qtrue = true;
const qfalse = false;
const notptrue = !ptrue;
const notpfalse = !pfalse;
// //Ejercicio 3.a NOT p
// console.log("NOT p cuando es T " +notptrue + "\nNOT p cuando es F " +notpfalse);
// //Ejercicio 3.a NOT p AND q
// const valor1= notptrue && qtrue;
// console.log("NOT p AND q(TRUE) "+valor1);

// const valor2= notptrue && qfalse;
// console.log("NOT p AND q(FALSE) "+valor2);

// const valor3= notpfalse && qtrue;
// console.log("NOT p AND q(TRUE) "+valor3);

// const valor4= notpfalse && qfalse;
// console.log("NOT p AND q(FALSE) "+valor4);

// EJERCICIO 3.b
const notqtrue = !ptrue;
const notqfalse = !pfalse;
console.log("NOT q cuando es T " +notqtrue + "\nNOT q cuando es F " +notqfalse);

// NOT p AND NOT q

const valor5= notptrue && notqtrue;
console.log("NOT p(TRUE) AND NOT q(TRUE) "+valor5);

const valor6= notptrue && notqfalse;
console.log("NOT p(TRUE) AND NOT q(FALSE) "+valor6);

const valor7= notpfalse && notqtrue;
console.log("NOT p(FALSE) AND NOT q(TRUE) "+valor7);

const valor8= notpfalse && notqfalse;
console.log("NOT p(FALSE) AND NOT q(FALSE) "+valor8);

