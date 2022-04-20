const mongoose = require('mongoose')

const Schema = mongoose.Schema({
  ru:{
    type:String,
    unique:true,
    required:true
  },
  en:{
    type:String,
    unique:true,
    required:true
  },
  tr:{
    type:String,
    unique:true
  },
  ch:{
    type:String,
    unique:true
  },
  es:{
    type:String,
    unique:true
  },
  categories:{
    type:Array
  }
})

module.exports = mongoose.model('Word', Schema)