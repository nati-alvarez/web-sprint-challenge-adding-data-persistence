const express = require("express");
const router = express.Router();
const resourceModel = require("../data/resource/resource");

router.get("/", async (req, res)=>{
    try {
        const resources = await resourceModel.getAll();
        res.status(200).json(resources);
    }catch(err){
        console.log(err);
        res.status(500).json({message: "A server error occurred"});
    }
});

router.post("/", async (req, res)=>{
    try {
        const {name, description} = req.body;
        const resource = await resourceModel.createResource(name, description);
        if(resource == null) return res.status(400).json({message: "Resource already exists"});
        res.status(201).json(resource);
    }catch(err){
        console.log(err);
        res.status(500).json({message: "A server error occurred"});
    }
})

module.exports = router;