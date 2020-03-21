const router = require("express").Router()
// const {getAll} = require("./handlers")
const {getAll,getPro} = require("./handlers")
const helper = require('./helpers')
const validator = require("./validator")

router.get( "/" , getAll)

// router.get("/:id",(req,res)=>{
//     const {id} =req.params
// helper.getProject(id)
// .then(([project])=>res.status(200).send(project)
// )
// .catch(err=>res.status(500).send(err))
// })


router.get("/:id", validator, getPro)



module.exports = router
