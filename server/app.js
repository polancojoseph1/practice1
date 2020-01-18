const express = require('express')
const path = require('path')
const app = express()

// body parsing middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', require('./api/campus')) // include our routes!

app.use(express.static(path.join(__dirname, '../public')))//Seperates the /api from the public 

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/index.html'))
// }) // Send index.html for any other requests

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error')
})

app.listen(1111, () => console.log(`studiously serving silly sounds on port 1111`))
