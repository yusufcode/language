const mongoose = require('mongoose')

const Schema = mongoose.Schema({
  ru:{
    type:String,
    required:false,
    unique:false,
    sparse:true
  },
  gb:{
    type:String,
    required:false,
    unique:false,
    sparse:true
  },
  tr:{
    type:String,
    required:false,
    unique:false,
    sparse:true
  },
  ch:{
    type:String,
    required:false,
    unique:false,
    sparse:true
  },
  es:{
    type:String,
    required:false,
    unique:false,
    sparse:true
  },
  categories:{
    type:Array,
    required:false,
    unique:false,
    sparse:true
  }
})

module.exports = mongoose.model('Word', Schema)