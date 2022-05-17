const express = require('express')
const app = express()
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')

//APP USE
dotenv.config({path: '.env'})
app.use(express.json())
app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))

//ROUTES
const ImproveLanguageRoute = require('./routes/word')
const ImproveLanguageCategoriesRoute = require('./routes/category')

app.use('/api/word', ImproveLanguageRoute)
app.use('/api/category', ImproveLanguageCategoriesRoute)

app.use(express.static(path.join(__dirname, "/client/build"))) 
app.get('*', (req,res)=>{
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'))
})

//DATABASE
const databaseUrl = process.env.MONGO_DB
mongoose.connect(databaseUrl, {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
  console.log('DB Connected!')
})

//SERVER
const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server Listening on Port ${port}!`)
})