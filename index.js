/**
 *  koders -> 870
 *  mentors -> 10mentors
 */


// Declarar
/**
 * parametros por defecto tienen que ser los ultimos 
 */
// class
/**
 * const card = { pintar : () => }
 */
// let nombre = "Alejandra";
// @ts-ignore
function imprimirNombre(nombre, apellido, edad = 20, tipo = "koder") {
  // Un parametro -> variable local dentro de mi funcion

  // @ts-ignore
  const funcionDentroDeImprimirNombre = () => console.log("sdfsd");
  return ["mensaje"];
  // Despues del return no se hace nada
};

/**
 * Cuando ponemos parametros en una funcion. Les tenemos que dar valor a esos parametros al mandar a llamar
 * la funcion
 */
// Referencia
// console.log("aqui esta mi funcion", imprimirNombre);

// Mandar a llamar/ejecutar
// imprimirNombre("Ale", "Paez", 27, "mentor");
// imprimirNombre("Daniel", "Flores", 25);
// imprimirNombre("Pao", "Flores", 25);
// imprimirNombre("Pao", "Flores", 25);
// imprimirNombre("Luis", "Daniel", 25);

// const funcionEnClosure = imprimirNombre("Ale", "Paez", 27)

// Arrow functions --> 2015 ES6
// imports -> require
// filter, reduce, metodos array
//

/**
 * map
 * filter
 * reduce
 */

const Mara = "3"
const koders = {
  Mara,
  Pao: "4",
  Laura: "7",
  Sam: "9",
};

const kodersArreglo = ["Mara", "Pao", "Laura", "Sam"]
const objetoAtransformar = {
  Mara : {
    nombre: "Mara"
  },
  Pao : {
    nombre: "Pao"
  }
}
// { Mara: '3', Pao: '4', Laura: '7', Sam: '9' }
const bdsf = {
  nombre: "Pao",
}
// @ts-ignore
const objetoTransformado = kodersArreglo.reduce((accumulador, key, idx, array) => {
  return {
    ...accumulador, // 
    [key]: {
      nombre: key
    }
  }
}, {})
console.log("type of de", typeof kodersArreglo);
// Acceder por referencia -> hay un problema
// Acceder por valores
/**
 * 
 * {
 *  "mara": {
 *    nombre: "mara"
 * }
 * }
 */

const keys = Object.keys(koders);
const values = Object.values(koders);
// Filtrado donde sean mayores a 5
// console.log("KEys", keys);
// @ts-ignore
const kodersFiltrados = keys.filter((key, idx, array) => {
  if(koders[key] > 5) return key
})
// console.log("kodersFiltrados con filter", kodersFiltrados);

// @ts-ignore
const kodersFiltradosMap = keys.map((key, idx, array) => {
  if(koders[key] > 5) return key
})
// console.log("kodersFiltrados con MAPPP", kodersFiltradosMap);
// Ejecutan/Se mandan a llamar
