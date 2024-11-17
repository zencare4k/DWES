const express = require('express')

const routes = require('../routes')

const startServer = () =>{
    const server = express()

    server.use(routes)

    const PORT = process.env.PORT || 3000

    server.listen(PORT, () => {
        console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
        
    })
}

module.exports = startServer

