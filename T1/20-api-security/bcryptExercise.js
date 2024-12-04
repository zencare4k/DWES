
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');   
const mensajeOriginal = "I know your secret";
const saltRounds = 10;


bcrypt.hash(mensajeOriginal, saltRounds, (err, hash) => {
    if (err) throw err;
    console.log("Hash de contraseña: ", hash);

bcrypt.compare("I know your secret", hash, (err, isMatch) => {

if (err) throw err

if (isMatch) {
    console.log("La contraseña es correcta");
    
} else{
    console.log("La contraseña es incorrecta");
}
});
});



