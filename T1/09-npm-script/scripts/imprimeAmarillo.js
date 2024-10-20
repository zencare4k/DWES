// scripts/imprimeAmarillo.mjs

import chalk from 'chalk';

// Capturamos el argumento pasado
const mensaje = process.argv[2];

// Imprimimos el mensaje en amarillo
console.log(chalk.yellow(mensaje));
