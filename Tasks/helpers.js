const db = require("../data/DBConfig")

//------getAll--------
const getAll = () => {
    return db("tasks")
}
//-------getTAskByProjectid-------

//id of the project you need task for
const getTask = (id)=> 
db("tasks")
.join("projects","projects.Project_ID", "=", "tasks.Task_Project_ID")
.where("Task_Project_ID", "=", id)
.select("*")

//--------get taskByTaskId---------

const getSpecTask =(id) =>db("task")
.where("Task_ID", "=", id)
.first()



//-------updateTask---------

const putTask =(id, task)=> db("task")
.where("Task_ID", "=", id)
.update(task)

//-----------------

module.exports = {
    getAll,
    getTask,    
    getSpecTask,
    putTask
}