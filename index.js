const express = require('express')
const app = express()

require('dotenv').config()

const port = process.env.PORT || 5000
const myLiffId = process.env.MY_LIFF_ID

app.use(express.static('public'))

app.get('/send-id', function (req, res) {
  res.json({ id: myLiffId })
})

app.use('/report', express.static('public/report.html'))

app.listen(port, () => console.log(`app listening on port ${port}!`))
