const path = require('path')
const fs = require('fs')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log("1. Crear nota nueva");
console.log("2. Editar nota existente");
console.log("3. Eliminar nota");

rl.question('Elige una opcion: ', (answer) => {
    if (answer === '1') {
        rl.question('Escribe el nombre de la nota: ', (notaNombre) => {
            const notesDir = path.join(__dirname, '/notes')

            if (!fs.existsSync(notesDir)) {
                fs.mkdirSync(notesDir, {recursive: true})
            }
            const filePath = path.join(notesDir, `${notaNombre}.note`);

            if (fs.existsSync(filePath)) {
                console.log("Ya existe esa nota");
                rl.close()
                return
            }
            rl.question('Escribe el contenido de la nota: ', (Contenido) =>{
              
                fs.writeFileSync(filePath,Contenido)
              
                console.log(` Nota creada en ${filePath}`)
                rl.close()
                return
            })
        })
    } else if (answer === '2') {
       rl.question('Escribe el nombre del archivo que quieras editar: ', (nombreArchivo)=>{
        if (!fs.existsSync(`./notes/${nombreArchivo}.note`)) {
            console.log(`${nombreArchivo} no existe`);
        }

        rl.question('Escribe el contenido del archivo: ', (contenido) =>{
            fs.appendFileSync(`./notes/${nombreArchivo}.note`, contenido)
            console.log(`${nombreArchivo} fue editado con exito`);
            
        })
       })
       

    }else if (answer === '3') {
        rl.question('Escirbe el nombre del archivo que quieras eliminar: ', (nombreArchivo)=>{
            if (!fs.existsSync(`./notes/${nombreArchivo}.note`)) {
                console.log(`${nombreArchivo} no existe`);
                rl.close()
            }
            fs.unlinkSync(`./notes/${nombreArchivo}.note`)
            console.log(`${nombreArchivo}.note eliminado exitosamente`);
            rl.close()
            return
        })
    }
})


