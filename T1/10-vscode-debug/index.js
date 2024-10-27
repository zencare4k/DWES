const fetch = require('node-fetch');

async function fetchData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();
  console.log(data); 
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

console.log(myObject);
