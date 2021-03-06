const calculateCartPrice = require('./calculateCartPrice')
const express = require('express')
const cors = require('cors')
const axios = require('axios')
const app = express()

let whitelist = ['http://185.204.3.140:3000', 'http://185.204.3.140:8080', 'http://185.204.3.140', 'http://localhost:8080']

let corsOptions = {
  origin(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions))

app.use(express.json());

app.post('/calculate-cart-price', async (req, res) => {
  const products = req.body
  const currencies = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
    .then(response => {
      console.log(response.data)
      return response.data.Valute
    })

  res.json(calculateCartPrice(currencies, products))
});

app.listen(3000, function () {
  console.log('App start on port 3000')
});