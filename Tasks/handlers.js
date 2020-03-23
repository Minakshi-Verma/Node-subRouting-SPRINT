const helper = require("./helpers")

//------GetAll--------
const getAll = (req, res) => {
    helper.getAll()
    .then(tasks => res.status(200).send(tasks))
    .catch(err => res.status(500).send(err))
}
//------GetTAskBy Projectid------
const getTaskByProject = (req,res)=>{
    const {id} = req.params
    helper.getTask(id)
    .then(tasks=>res.status(200).json({tasks}))
    .catch(err=>res.status(500).json({message:err}))
}
//--------getTaskBy taskId-----

const getTaskById = (req,res)=>{    
    const {id} = req.params
    helper.getSpecTask(id)
    .then(task=>{
        res.status(200).json(task)   
        // if(task){
        //   res.status(200).json({task})     
        // }else{
        //   res.status(400).json({message:"we could not find the task with the id you provided"})
        // }          
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
        .catch(err => res.status(500).json({ message: err }));
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