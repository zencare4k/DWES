const fetch = require('node-fetch');

async function fetchData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();
  console.log(data); // Coloca un punto de ruptura aquí para inspeccionar `data`
}

fetchData();

const chalk = require('chalk');
const myObject = {
  propiedad1: "Hola",
  propiedad2: 42,
  metodo1() {
    console.log("Método ejecutado");
  },
  onEvento() {
    console.log("Evento disparado");
  }
};

console.log(myObject); // Punto de ruptura aquí
