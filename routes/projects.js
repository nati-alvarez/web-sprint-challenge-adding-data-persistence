const express = require("express");
const router = express.Router();
const postModel = require("../data/project/project");

router.get("/", async (req, res)=>{
    try {
        const posts = await postModel.getAll();
        res.status(200).json(posts);
    }catch(err){
        console.log(err);
        res.status(500).json({message: "A server error occurred"});
    }
});

router.post("/", async (req, res)=>{
    try {
        const {name, description} = req.body;
        const post = await postModel.createProject(name, description);
        res.status(201).json(post);
    }catch(err){
        console.log(err);
        res.status(500).json({message: "A server error occurred"});
    }
});

router.get("/:id", async (req, res)=>{
    try {
        const {id}  = req.params;
        const post = await postModel.getById(id);
        res.status(200).json(post);
    } catch (err) {
        console.log(err);
        res.status(500).json({message: "A server error occurred"});
    }
})

module.exports = router;