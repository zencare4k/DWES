import express from 'express';

const server = express()

server.use('/', (req, res) => {
    console.log('Request in');
    res.send("Hola Mundo")
})

server.use('/random', (req, res)=> {
    res.send('<h1>&{Math.random()}<h1>')
})

server.listen(PORT, () =>{
    console.log('Server listening in port ${PORT}');
    
})
