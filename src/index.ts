/**
 • Escriba un programa que pida al usuario dos números
enteros, y luego retorne la suma de todos los números
que están entre ellos
• Por ejemplo, si los números son 2 y 7, debe entregar
como resultado 2 + 3 + 4 + 5 + 6 + 7 = 27
 */

let numero1: number = Number(prompt("Ingrese el primer número: "));
let numero2: number = Number(prompt("Ingrese el segundo número"));
let resultado: number = 0;

for (let i = numero1; i <= numero2; i++) {
  resultado += i;
}
console.log("El resultado es: ", resultado);
