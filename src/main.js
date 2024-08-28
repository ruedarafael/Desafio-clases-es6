import Cliente from "./cliente.js";
import Impuesto from "./impuestos.js";

//Ejemplo para mostrar instancias por consola

let impuesto1 = new Impuesto();
let cliente1 = new Cliente (impuesto1);

console.log(cliente1);
console.log(impuesto1);
console.log(cliente1.CalcularImpuesto());