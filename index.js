const express = require('express')
const app = express()
const port = 8080
 
app.get('/', (request, response) => {
    response.status(200);

    if (request.header('Accept-Language').startsWith("ca-ES")) {
        response.send("hola ca")
    }else if (request.header('Accept-Language').startsWith("en-EN")) {
        response.send("hola eN")
    } else {
        response.send("hola es")
    }
    
})

app.post('/', (request, response) => {
    response.status(200);
    response.send('Hello from post!!!')
})

app.delete('/parada/38', (request, response) => {
    response.status(203);
    response.send('borrada parada 38!!!')
})

app.delete('/parada/39', (request, response) => {
    response.status(404);
    response.send('La parada 39 no existe!!!')
})
 
 
app.listen(port, (err) => {
  console.log(`server is listening on ${port}`)
})