var express = require('express')
var app = express()
var port = 5000

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))