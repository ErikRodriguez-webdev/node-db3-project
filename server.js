const express = require("express");

const SchemeRouter = require("./schemes/scheme-router.js");

const server = express();

server.use(express.json());

//Endpoints/Routers
server.use("/api/schemes", SchemeRouter);

module.exports = server;
