const helper = require("./helpers")

//------GetAll--------
const getAll = (req, res) => {
    helper.getAll()
    .then(tasks => res.status(200).send(tasks))
    .catch(err => res.status(500).send(err))
}
//------GetTAskByProject-------
const getTaskByProject = (req,res)=>{
    const {id} = req.params
    helper.getTask(id)
    .then(projects=>res.status(200).json({id}))
    .catch(err=>res.status(500).json({message:err}))
}
//--------getTaskById-----
const getTaskById = (req,res)=>{
    const {id} = req.params
    helper.getSpecTask(id)
    .then((task)=>{
        res.status(200).json(task)     
    })
    .catch(err=>res.status(500).json({message:err}))
}

//--------updateTask------

const updateTask = (req, res)=>{
    const {id} = req.params
    const {Task_Name, Task_Comp, Task_Notes} = req.body
    const task = {Task_Name, Task_Comp, Task_Notes}
    helper.putTask(id,task)
    .then(()=>{
        helper.getSpecTask(id)
        .then(task=>res.status(200).json(task))
    })
    .catch(err=>res.status(500).json({message:err}))

}

//---------------

module.exports = {
getAll,
getTaskByProject,
getTaskById,
updateTask

}