const express = require('express');
const ProjectFuncs = require('./projects-model');

const router = express.Router();

//// ENDPOINTS

// [GET] /api/projects sends an array of projects (or an empty array) as the body of the response.
router.get("/")

// [GET] /api/projects/:id sends a project with the given id as the body of the response.
router.get("/:id")

// [POST] /api/projects sends the newly created project as the body of the response.
router.post("/")

// [PUT] /api/projects sends the updated project as the body of the response.
router.put("/")

// [DELETE] /api/projects sends no response body.
router.delete("/")

// [GET] /api/projects/:id/actions sends an array of actions (or an empty array) as the body of the response.
router.get("/:id/actions")




//// FIN
module.exports = router;