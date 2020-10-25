const db = require("../db");

module.exports = {
    getAll,
    createTask
}

function getAll(){
    return db("Task")
    .join("Project", "Project.id", "Task.project_id")
    .select("Project.name as project_name", "Project.description as project_description",
    "Task.id as task_id", "Task.notes as notes", "Task.description as description", "Task.completed as completed");
}

async function createTask(project_id, description, notes = null){
    const id = await db("Task").insert({project_id, description, notes});
    const task = await db("Task").where({"Task.id": id[0]})
    .join("Project", "Project.id", "Task.project_id")
    .select("Project.name as project_name", "Project.description as project_description",
    "Task.id as task_id", "Task.notes as notes", "Task.description as description", "Task.completed as completed")
    .first();

    return task;
}