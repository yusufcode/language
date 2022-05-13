const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

//APP USE
app.use(express.json())
app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))

//ROUTES
const ImproveLanguageRoute = require('./routes/word')
const ImproveLanguageCategoriesRoute = require('./routes/category')

app.use('/api/word', ImproveLanguageRoute)
app.use('/api/category', ImproveLanguageCategoriesRoute)

//DATABASE
const databaseUrl = 'mongodb+srv://node_user:node_user_123@cluster0.u4slu.mongodb.net/yusufcode?retryWrites=true&w=majority'
mongoose.connect(databaseUrl, {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
  console.log('DB Connected!')
})

//SERVER
const port = 5000
app.listen(port, () => {
  console.log(`Server Listening on Port ${port}!`)
})