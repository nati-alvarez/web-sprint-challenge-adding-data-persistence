const db = require("../db");

module.exports = {
    getAll,
    createResource
}

function getAll(){
    return db("Resorce");
}

async function createResource(name, description = null){
    const resourceExists = await db("Resorce").where({name}).first();
    if(resourceExists) return null;

    const id = await db("Resorce").insert({name, description}).where({name});
    const resource = db("Resorce").where({id: id[0]}).first();
    return resource;
}