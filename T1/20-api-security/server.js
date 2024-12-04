const express = require('express');
const logger = require('./logger');
const bcrypt = require('bcrypt');

const validateToken = require('./validateToken');   

const app = express();
const PORT= 3000;

app.get('/generate-token', async (req, res) => {
    const token = await bcrypt.hash("I know your secret", 10)
    res.json({token})
});

app.get('/protected', validateToken, (req, res) => {    
    res.json({message: '¡Acceso concedido! Has proporcionado un token válido.'})
});

app.listen(PORT, () => {
console.log(`Servidor escuchado en hhtps://localhost:3000{PORT}`);
})

app.use(logger);