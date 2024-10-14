const fs = require('fs');

function Imprimirtxt(archivo) {
    const contenido = fs.readFileSync(archivo, 'utf8');
    
    console.log(contenido);
}

Imprimirtxt('./ejemplo.txt');
