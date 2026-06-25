const express = require('express');
const { getAllUsers, getUserById, getUserByName, createUser, delUserById } = require('../controllers/users.controller');

const routes = express.Router();

routes.get("/", getAllUsers); 
routes.get("/:id", getUserById);
routes.delete("/:id", delUserById);

//my test
routes.post("/", createUser);



module.exports = routes;