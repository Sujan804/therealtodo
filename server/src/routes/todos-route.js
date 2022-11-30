const express = require("express");
const router = express.Router();

const {
  getAllTodos,
  getATodo,
  createATodo,
  createManyTodos,
  updateATodo,
  deleteATodo,
} = require("../controllers/todo-controllers");

router.get("/todos-all", getAllTodos);
router.get("/todo/:id", getATodo);
router.post("/todo/new", createATodo);
router.post("/todo-many", createManyTodos);
router.put("/todo/:id", updateATodo);
router.delete("/todo/:id", deleteATodo);
module.exports = router;
