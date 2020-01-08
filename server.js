const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/room', (req, res) => {
  return res.send('GET HTTP method on user resource');
});

app.post("/room", (req, res, next) => {
   res.send('GET POST method on user resource');
 });


app.listen(port, () => console.log(`CORS-enabled web server on port ${port}!`))


