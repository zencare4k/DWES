const express = require('express');
const axios = require('axios');
const bcrypt = require('bcrypt');
const app = express();
import public from './public';
import admin from './admin';
import vip from './vip';

const saltRounds = 10;
const roles = ['public', 'admin', 'vip'];

app.use(express.json());

let users = [];

const API_BASE_URL = 'http://localhost:3000/users'


app.get('/users', (req, res) => {
    res.status(200).send(users); 
});



app.get('/users', (req, res) => {
    res.status(200).send(users);
});

app.post('/users', (req, res) => {
    const newUser = {
        id:`${Date.now()}`,
        name: req.body.name,
    }
    users.push(newUser);
    res.status(201).send(newUser);
}); 

//Obtener un usuario por id
app.get('/users/:userid', (req, res) => {
    const user = user.find((u => u.id === req.params.userid));
    if(user) {
        res.status(200).send(user);
    } else {
        res.status(404).send({message: 'User not found'});
    }
});

//Actualizar un usuario

app.put('/users/:userid', (req, res) => {
    const index = users.findIndex(u => u.id === req.params.userid);
    if (index !== -1) {
        users[index] ={ id: req.params.userid, 
            name: req.body.name
        }
    } else{
        res.status(404).send({message: 'User not found'});
    }
});

app.patch('/users/:userid', (req, res) => {
    const user = user.find(u=> u.id === req.params.userid);
    if(user){
        user.name = req.body.name|| user.name;
        res.status(200).json(user);
    } else {
        res.status(404).send({error:"usuario no encontrado"})
    }
});

app.delete('/users/:userid', (req, res) => {
    const index = users.fi
    dIndex(u => u.id === req.params.userid);
    if (index !== -1) {
        users.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send({message: 'User not found'});
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});

//Seguridad de la api

bcrypt.hash(admin, saltRounds, (err, hash) => {
    if (err) throw err;
    console.log("Hash de contraseña: ", hash);
});