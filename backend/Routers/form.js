const express = require('express');
const router =new express.Router();
const FormSchema =require("../schemas/formschma")

router.post("/",async (req, res) => {
    try {
        const showsRecords= new FormSchema(req.body)
        // console.log(req.body)
      showsRecords.save()
      const insetshowsRecords=await showsRecords.save()
      res.status(201).send(insetshowsRecords)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get("/",async (req, res) => {
    try {
        const getshows=await FormSchema.find({})
        res.send(getshows)
    } catch (error) {
        res.status(400).send(error)
    }
})
router.get("/:id",async (req, res) => {
    try {
        const _id = req.params.id
        const getshow=await FormSchema.findById(_id)
        res.send(getshow)
    } catch (error) {
        res.status(400).send(error)
    }
})
router.patch("/:id",async (req, res) => {
    try {
        const _id = req.params.id
        const getshow=await FormSchema.findByIdAndUpdate({_id:_id},req.body,{new:true})
        res.send(getshow)
    } catch (error) {
        res.status(400).send(error)
    }
})
router.delete("/:id",async (req, res) => {
    try {
        const _id = req.params.id
        const getshow=await FormSchema.findByIdAndUpdate(req.params.id)
        res.send(getshow)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports =router
