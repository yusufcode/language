const mongoose = require('mongoose')

const Schema = mongoose.Schema({
  ru:{
    type:String,
    required:true
  },
  en:{
    type:String,
    required:true
  },
  tr:{
    type:String,
    required:false
  },
  ch:{
    type:String,
    required:false
  },
  es:{
    type:String,
    required:false
  }
})

module.exports = mongoose.model('Category', Schema)