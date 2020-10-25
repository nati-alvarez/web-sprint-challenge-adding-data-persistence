const db = require("../db");

module.exports = {
    getAll,
    createProject,
    getById
}

function getAll(){
    return db("Project");
}

async function createProject(name, description = null){
    const id = await db("Project").insert({name, description});
    console.log(id[0])
    const project = await db("Project").where({id: id[0]}).first();
    return project;
}

function getById(id){
    return db("Project").where({id}).first();
}