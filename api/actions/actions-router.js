const express = require('express');
const ActionsFuncs = require('./actions-model');

const router = express.Router();

//// ENDPOINTS

// [GET] /api/actions sends an array of actions (or an empty array) as the body of the response.
router.get("/", (req, res) => {
    ActionsFuncs.get()
    .then(success => {
        res.status(200).json(success)
    })
    .catch(error => {
        res.status(500).json({ message: error.message })
    })
})

// [GET] /api/actions/:id sends an action with the given id as the body of the response.
router.get("/:id", (req, res) => {
    const { id } = req.params;

    ActionsFuncs.get(id)
    .then(success => {
        if(success !== null){
            res.status(200).json(success)
        } else {
            res.status(404).json({ message: `post with id ${id} not found.`})
        }
    })
    .catch(error => {
        res.status(500).json({ message: error.message })
    })

})

// [POST] /api/actions sends the newly created action as the body of the response.
router.post("/", (req, res) => {
    const newAction = req.body

    if (!req.body.project_id || !req.body.description || !req.body.notes) {
        res.status(400).json({ message: "missing required field" });
    } else {
        ActionsFuncs.insert(newAction)
            .then(success => {
                res.status(201).json(success);
            })
            .catch((error) => {
                res.status(500).json({ message: error.message });
            });
    }

});

// [PUT] /api/actions/:id sends the updated action as the body of the response.
router.put("/:id", (req, res) => {
  const { id } = req.params;


  if (id) {
    ActionsFuncs.get(id) //if id not found returning null (not error). need to catch!
      .then((success) => {
        if (req.body) {
          ActionsFuncs.update(id, req.body)
            .then((success) => {
              res.status(200).json({success});
            })
            .catch((error) => {
              res.status(404).json({ message: `post with id ${id} not found.` });
            });
        } else {
          res.status(400).json({ message: "req.body missing required info." });
        }
      })
      .catch((error) => {
        res.status(404).json({ message: `action with id ${id} not found.` });
      });
  }
});

// [DELETE] /api/actions/:id sends no response body.
router.delete("/:id", (req, res) => {
    const { id } = req.params;

    ActionsFuncs.remove(id)
    .then(success => {
        if(success > 0) {
            res.status(200).json({ message: `successfully deleted action id ${id}`})
        } else {
            res.status(404).json({ message: `action with id ${id} does not exist.` })
        }
    })
    .catch(error => {
        res.status(500).json({ message: error.message })
    })
})


//// FIN
module.exports = router;