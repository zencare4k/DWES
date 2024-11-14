const express = require('express')
const server = express()
app.use(express.json());

server.get('/', function(req,res){
    const { mycustomheader } = req.headers
    res.status(200).send(mycustomheader)
})

server.get('/header', (req, res) => {
    const token = req.headers.token

    if (!token) {
        return res.status(401).json({
            code: 401,
            error: "Unauthorized",
            message: "Error: Set a token to login"
        })
    }
    console.log(`Token recibido: ${token}`);
    res.send("Token recibido correctamente")
    
})

server.get('/params/:name', (req, res)=> {
    const name = req.params.name
    res.send(`Hola ${name}`)
})

server.get('/query', (req, res) =>{
    const n = parseInt(req.query.n)||100
    const sum = (n*(n+1))/2
    req.send(`La suma de los números de 1 a ${n} es: ${sum}`)
})

server.post('/body', (req, res)=>{
    const data = req.body
    const htmlist = "<ul>"
    for (const [key, value] of Object.entries(data)){
        htmlist +=  `<li>${key}: ${value}</li>`
    }
    htmlist += "</ul>"
    res.send(hmtl)
})
server.listen(3000, () => {
    console.log(`Servidor escuchando en http://localhost:3000`);
    
})