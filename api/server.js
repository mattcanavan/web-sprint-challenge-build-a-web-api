const express = require('express');
const actionsRouter = require("./actions/actions-router");
const projectRouter = require("./projects/projects-router");
const helmet = require('helmet');

const server = express();

server.use(express.json());
server.use(helmet());
server.use("/api/actions", actionsRouter);
server.use("/api/projects", projectRouter);

server.get("/", (req, res) => {
    res.send("Now we're cookin!")
})

// Complete your server here!
// Do NOT `server.listen()` inside this file!

module.exports = server;
