function imprimirFichero(archivo) {
    const fs = require('fs')
    const data = fs.readFileSync(archivo, 'utf8')
    console.log(data);
}

imprimirFichero('./texto.txt')