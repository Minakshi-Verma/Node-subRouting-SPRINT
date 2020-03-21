const helper = require("./helpers")

const getAll = (req, res) => {
    helper.getAll()
    .then(projects => res.status(200).send(projects))
    .catch(err => res.status(500).send(err))
}

const getPro = (req, res) => {
    const {id} = req.params
    helper.getProject(id)
    .then((project)=> res.status(200).send(project)
    )
    .catch(err => res.status(500).send({message: err}))
}


module.exports = {
getAll,
getPro
}