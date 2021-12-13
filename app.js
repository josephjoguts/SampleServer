const express = require('express')
const app = express()
const port = 5000
app.use(express.urlencoded({ extended: true }))
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// create a GET route
app.get('/helloWorld', (req, res) => {
  res.send({message: "HelloAnton"}); //Line 10
});
app.get('/helloWorld2', (req, res) => {
  res.send({message: "HelloAnton2"}); //Line 10
});