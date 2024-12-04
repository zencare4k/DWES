exports.publicAccess = (req, res) => {  
    res.status(200).send('Bienvenido al acceso publico');
}

exports.privateAccess = (req, res) => {  
    res.status(200).send(`Bienvenido ${req.user.name} al acceso privado`);
}

exports.adminAccess = (req, res) => {  
    res.status(200).send(`Bienvenido ${req.user.name} al acceso de administrador`);
}