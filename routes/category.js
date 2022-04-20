const router = require('express').Router()
const Category = require('../models/Category')

//CREATE
router.post('/', async (req,res)=>{
  const newRecord = await Category(req.body)
  try{
    console.log(newRecord)
    const savedRecord = await newRecord.save()
    res.status(200).json(savedRecord)
  } catch(err){
    console.log(newRecord)
    res.status(500).json(err)
  }
})

//UPDATE
router.put('/:id', async (req,res)=>{
  try{
    const updatedRecord = await Category.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body
      },
      {
        new: true
      }
    )
    res.status(200).json(updatedRecord)
  } catch(err){
    res.status(500).json(err)
  }
})

//DELETE
router.delete('/:id', async (req,res)=>{
  try{
    await Category.findByIdAndDelete(req.params.id)
    res.status(200).json('Record has been deleted.')
  } catch(err){
    res.status(500).json(err)
  }
})

//GET
router.get('/:id', async (req,res)=>{
  try{
    const record = await Category.findById(req.params.id)
    res.status(200).json(record)
  } catch(err){
    res.status(500).json(err)
  }

})

//GET ALL
router.get('/', async (req,res)=>{
  const ru = req.query.ru
  const en = req.query.en
  const tr = req.query.tr
  try{
    let record;
    if(ru){
      record = await Category.find({ru})
    } else if(en){
      record = await Category.find({en})
    } else if(tr){
      record = await Category.find({tr})
    } else{
      record = await Category.find()
    }
    res.status(200).json(record)
  } catch(err){
    res.status(500).json(err)
  }

})

module.exports = router