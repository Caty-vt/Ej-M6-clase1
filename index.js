const archivo = require("fs");
const path = "./files/plano.txt"; //1 este se crea dentro de files despues de poner en terminal node.index.js

async function escribir(mensaje){                         
    await archivo.appendFile(path, mensaje, (error)=> {   //1 crea un f(x sincronica)
        if (error)console.log (error);                    //1 que si hay error lo muestre
        else console.log("el archivo modificado")         
    })
}

//archivo.writeFileSync(path, "Hola Mundo") //1 crea y graba el texto y reemplaza lo que uno escriba
//archivo.appendFileSync(path, "Hola Mundo!\n");//1 crea y agrega informacion, pero no e recomienda usar este con sync mejor el de arriba\n salto linea
//archivo.appendFileSync(path, "Chao Mundo!\n");

let nombre = process.argv[2]; //2 lo traje desde el otro js
let apellido = process.argv[3];
archivo.appendFileSync(path, `Hola ${nombre}, tu apellido es ${apellido}\n`);//2 valores recibicos por la terminal lo estoy considerando estructura del archivo


escribir("este texto es asincronico\n") //1 escribir de nuevo en forma sincronica
//const = archivo.readFileSync

console.log(archivo.readFileSync(path).toString());//1 aqui se lee en la terminal lo escrito hasta el path, toString escribe como texto no es necesario hacer una constante  

//archivo.unlinkSync(path) //1 elimina o borra el archivo 