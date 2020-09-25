const express = require('express')
const app = express()
const path = require('path')

require('dotenv').config()

const port = process.env.PORT || 5000
const myLiffId = process.env.MY_LIFF_ID

app.get('/', (req, res) => {
  if (req.query['liff.state']) {
    res.sendFile(path.join(__dirname, './public', '/redirect.html'))
  } else {
    res.sendFile(path.join(__dirname, './public', '/index.html'))
  }
})

app.use(express.static('public'))

app.get('/send-id', function (req, res) {
  if (req.query) res.json({ id: myLiffId })
})

app.use('/report', express.static('public/report.html'))

app.listen(port, () => console.log(`app listening on port ${port}!`))
