const express = require('express');
const router = express.Router();

let tasks = [
  { id: 1, description: "Test task" }
];

// get all tasks
router.get('/', (req, res) => {
  res.json(tasks);
});

// add task
router.post('/new', (req, res) => {
  const { description } = req.body;
  const newTask = {
    id: Date.now(),
    description
  };
  tasks.push(newTask);
  res.json(newTask);
});

// delete task
router.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  tasks = tasks.filter(t => t.id != id);
  res.json({ id });
});

module.exports = { todoRouter: router };