const express = require("express");
const router = express.Router();

const projectRoutes = require("./projects");
const taskRoutes = require("./tasks");
const resourceRotues = require("./resources");

router.use("/projects", projectRoutes);
router.use("/tasks", taskRoutes);
router.use("/resources", resourceRotues);

module.exports = router;