const express = require('express');
const ActionsFuncs = require('./actions-model');

const router = express.Router();

//// ENDPOINTS

// [GET] /api/actions sends an array of actions (or an empty array) as the body of the response.
router.get("/")

// [GET] /api/actions/:id sends an action with the given id as the body of the response.
router.get("/:id")

// [POST] /api/actions sends the newly created action as the body of the response.
router.post("/")

// [PUT] /api/actions/:id sends the updated action as the body of the response.
router.put("/:id")

// [DELETE] /api/actions/:id sends no response body.
router.delete("/:id")


//// FIN
module.exports = router;