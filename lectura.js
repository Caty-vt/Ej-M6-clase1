console.log(process.argv); // process entrega mucha info en la terminal cuando uno pone node lectura.js y con argv entrega datos
//en la terminal se pone hola y se escribe, node lectura.js hola
let nombre = process.argv[2]; // ahora se escribe en la terminal node lectura.js susana munoz
let apellido = process.argv[3]; //y como aprarecen dos lineas pero se cuenta como la [1] por eso nombre [2]

console.log(nombre);
console.log(apellido);