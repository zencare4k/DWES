const fs = require('fs');
const readline = require('readline');
const path = './notas/';  

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenu() {
    console.log(`
    Selecciona una opción:
    1. Crear nueva nota
    2. Editar nota existente
    3. Eliminar nota
    4. Salir
    `);

    rl.question('Elige una opción: ', (opcion) => {
        switch(opcion) {
            case '1':
                crearNota();
                break;
            case '2':
                listarNotas('editar');
                break;
            case '3':
                listarNotas('eliminar');
                break;
            case '4':
                console.log('Saliendo...');
                rl.close();
                break;
            default:
                console.log('Opción no válida.');
                mostrarMenu();
        }
    });
}

function crearNota() {
    rl.question('Nombre de la nota: ', (nombre) => {
        const fileName = `${path}${nombre}.note`;
        
        if (fs.existsSync(fileName)) {
            console.log('La nota ya existe. Elige otro nombre.');
            crearNota();
        } else {
            console.log('Escribe tu nota (presiona dos veces Enter para terminar):');
            escribirNota(fileName, '');
        }
    });
}

function escribirNota(fileName, contenido) {
    rl.prompt();
    
    let lineasBlanco = 0;
    rl.on('line', (linea) => {
        if (linea === '') {
            lineasBlanco++;
        } else {
            lineasBlanco = 0;
        }

        if (lineasBlanco === 2) {
            fs.writeFileSync(fileName, contenido);
            console.log('Nota guardada correctamente.');
            rl.removeAllListeners('line');
            mostrarMenu();
        } else {
            contenido += linea + '\n';
        }
    });
}

function listarNotas(accion) {
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path);
    }

    const archivos = fs.readdirSync(path).filter(file => file.endsWith('.note'));

    if (archivos.length === 0) {
        console.log('No hay notas disponibles.');
        mostrarMenu();
        return;
    }

    console.log('Notas disponibles:');
    archivos.forEach((file, index) => {
        console.log(`${index + 1}. ${file}`);
    });

    rl.question('Elige el número de la nota: ', (numero) => {
        const indice = parseInt(numero) - 1;
        if (indice >= 0 && indice < archivos.length) {
            const archivoSeleccionado = archivos[indice];
            const fileName = `${path}${archivoSeleccionado}`;
            
            if (accion === 'editar') {
                const contenido = fs.readFileSync(fileName, 'utf8');
                console.log(`Contenido actual:\n${contenido}`);
                console.log('Escribe para editar la nota (presiona dos veces Enter para terminar):');
                escribirNota(fileName, contenido);
            } else if (accion === 'eliminar') {
                fs.unlinkSync(fileName);
                console.log(`Nota "${archivoSeleccionado}" eliminada.`);
                mostrarMenu();
            }
        } else {
            console.log('Opción no válida.');
            mostrarMenu();
        }
    });
}

mostrarMenu();
