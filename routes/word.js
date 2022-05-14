const router = require('express').Router()
const Word = require('../models/Word')

//CREATE
router.post('/', async (req,res)=>{
  const newRecord = await Word(req.body)
  try{
    const savedRecord = await newRecord.save()
    res.status(200).json(savedRecord)
  } catch(err){
    console.log(err)
    res.status(500).json(err)
  }
})

//UPDATE
router.put('/:id', async (req,res)=>{
  try{
    const updatedRecord = await Word.findByIdAndUpdate(
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
    await Word.findByIdAndDelete(req.params.id)
    res.status(200).json('Word has been deleted.')
  } catch(err){
    res.status(500).json(err)
  }
})

//GET
router.get('/:id', async (req,res)=>{

  try{
    const record = await Word.findById(req.params.id)
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
  const ch = req.query.ch
  const es = req.query.es
  const category = req.query.category
  try{
    let record;
    if(tr){
      record = await Word.find({tr})
    } else if(en){
      record = await Word.find({en})
    } else if(ru){
      record = await Word.find({ru})
    } else if(ch){
      record = await Word.find({ch})
    } else if(es){
      record = await Word.find({es})
    } else if(category){
      record = await Word.find({categories:category})
    } else{
      record = await Word.find()
    }
    res.status(200).json(record)
  } catch(err){
    res.status(500).json(err)
  }

})

module.exports = router