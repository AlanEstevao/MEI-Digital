const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(express.static(path.join(__dirname, '/public')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

app.post('/cadastro', (req, res) => {

    console.log(req.body)

    const user = {
      name: req.body.name,
      email: req.body.email,
      mobile: req.body.mobile
    }
    console.log(user)
    res.send(user)
})

app.listen(3000)