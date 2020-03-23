const router = require("express").Router()
const {getAll, getTaskByProject, getTaskById, updateTask} = require("./handlers")

router.get( "/" , getAll)

router.get( "/:id" , getTaskByProject)

router.get("/tasks/:id", getTaskById)

router.put("/:id", updateTask)

module.exports = router