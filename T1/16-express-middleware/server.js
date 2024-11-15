const express = require('express')

const logger = require('./logger')

const server = express()
const port = 3000

server.use((req, res, next)=>{
    res.on('finish', () =>{
        const statusCode = res.statusCode

        if (statusCode >= 200 && statusCode < 300) {
            logger.info(`URL: ${req.url} - Method: ${req.method} - Status: ${statusCode}`);

        } else if (statusCode >= 400 && statusCode < 500) {
            logger.warn(`URL: ${req.url} - Method: ${req.method} - Status: ${statusCode}`);
        } else if (statusCode >= 500) {
            logger.error(`URL: ${req.url} - Method: ${req.method} - Status: ${statusCode}`);

        }
    })
    next()
})

server.get('/success', (req, res) => {
    res.status(200).send('Success')
}) 

server.get('/not-found', (req, res) =>{
    res.status(404).send('Not Found')
})

server.get('/server-error', (req, res)=>{
    res.status(500).send('Server Error')
})



function validateAccess(req, res, next) {
    const passwd = req.headers['password']

    if (passwd === 'patata') {
        next()
    } else {
        res.status(401).json({
            error: "Acceso restringido, por favor, incluya la palabra secreta en el parámetro 'password' en la cabecera de la petición"
        })
    }
}


server.get('/zona-restringida', validateAccess, (req, res) => {
    res.status(200).send("Bienvenid@, disfrute del contenido");
  });
server.listen(port, () =>{
    console.log(`Server running on http://localhost:${port}`);
    
})