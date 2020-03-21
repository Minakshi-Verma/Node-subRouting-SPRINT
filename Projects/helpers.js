const db = require("../data/DBConfig")

const getAll = () => db("projects")

const getProject =(id)=>db("projects").where("Project_ID", "=", id)
const addProject =(project)=>db("project").insert(project,"Project_ID")
const deleteProject =(id) =>db("project").where("Project_ID","=",id).first()


module.exports = {
    getAll,
    getProject,
    addProject,
    deleteProject
    

}

