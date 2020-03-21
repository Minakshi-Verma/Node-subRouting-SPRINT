const helper = require("./helpers")

const validateId = (req, res, next)=>{
    const{id}= req.params
    helper.getProject(id)
    .then(project =>{
        if(!project.length){
            res.status(400).json({message:"project with this id does not exist"})
        }else{
            next()
        }
    })
    .catch(err=>res.status(500).send({err}))
}

module.exports = validateId