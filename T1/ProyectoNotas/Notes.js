const fs = require('fs');
const path = require('path');
const ruta = "./notas";
const readline = require('readline');
console.log("¿Qué quieres hacer?");
console.log("1. Crear una nota");
console.log("2. Editar una nota existente");
console.log("3. Eliminar una nota");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Elige una opción (1, 2 o 3): ', (answer) => {

  if (answer === '1') {

   
    //  Crear una nota
    rl.question('Escribe el nombre del archivo a crear: ', (nombreArchivo) => {
      rl.question('Escribe el contenido del archivo: ', (contenidoArchivo) => {
        console.log(`Archivo creado en ${ruta}`);
        fs.writeFile(path.join(ruta, nombreArchivo + ".note"), contenidoArchivo,  (err) => {
          if (err) {
            console.error('Error al crear el archivo:', err);
          } else {
            console.log(`Archivo '${nombreArchivo}' creado con éxito.`);
          }
          rl.close();
        });
      });
    });
  } else if (answer === '2') {
    //Editar una nota existente
    rl.question('Escribe el nombre del archivo a editar: ', (nombreArchivo) => {
      rl.question('Escribe el nuevo contenido del archivo: ', (contenidoArchivo) => {
        
        if (!fs.existsSync(path.join(ruta, nombreArchivo))) {
          console.error(`Error: El archivo '${nombreArchivo}' no existe.`);
          rl.close();
          return;
        }    fs.writeFile(path.join(ruta, nombreArchivo), contenidoArchivo,  (err) => {
                        if (err) {
                          console.error('Error al crear el archivo:', err);
                        } else {
                          console.log(`Archivo '${nombreArchivo}' creado con éxito.`);
                        }
                        rl.close();
                      });

        fs.writeFile(path.join(ruta, nombreArchivo), contenidoArchivo, (err) => {
          if (err) {
            console.error('Error al editar el archivo:', err);
          } else {
            console.log(`Archivo '${nombreArchivo}' editado con éxito.`);
          }
          rl.close();
        });
      });
    });
  }

  else if (answer === '3') {
    //Eliminar una nota
    rl.question('Escribe el nombre del archivo a eliminar: ', (nombreArchivo) => {
      if (!fs.existsSync(path.join(ruta, nombreArchivo))) {
        console.error(`Error: El archivo '${nombreArchivo}' no existe.`);
        rl.close();
        return;
      }

      fs.unlink(path.join(ruta, nombreArchivo), (err) => {
        if (err) {
          console.error('Error al eliminar el archivo:', err);
        } else {
          console.log(`Archivo '${nombreArchivo}' eliminado con éxito.`);
        }
        rl.close();
      });
    });
  }

  else {
    console.log('Opción no válida. Por favor elige 1, 2 o 3.');
    rl.close();
  }
});
