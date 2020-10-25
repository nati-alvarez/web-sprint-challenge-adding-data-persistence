const express = require("express");
const router = express.Router();
const taskModel = require("../data/task/task");

router.get("/", async(req, res)=>{
    try{
        const tasks = await taskModel.getAll();
        res.status(200).json(tasks);
    }catch(err){
        console.log(err);
        res.status(500).json({message: "A server error occurred"});
    }
});

router.post("/", async (req, res)=>{
    const {project_id, description, notes} = req.body;
    if(!project_id || !description) return res.status(400).json({message: "project id and description requried"});
    try {
        const task = await taskModel.createTask(project_id, description, notes);
        res.status(201).json(task);
    }catch(err){
        console.log(err);
        res.status(500).json({message: "A server error occurred"});
    }
});

module.exports = router;