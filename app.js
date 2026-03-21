const express = require('express')
const app = express()

// ✅ CORS исправлен правильно
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  
  // Обработка preflight-запроса
  if (req.method === 'OPTIONS') {
    res.sendStatus(200)
    return
  }
  
  next()
})

app.use(express.json())

let tasks = [
  { id: 1, description: "My test task" },
  { id: 2, description: "My another test task" },
  { id: 3, description: "Test from REST Client" }
]

app.get('/', (req, res) => {
  res.json(tasks)
})

app.post('/new', (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    description: req.body.description
  }
  tasks.push(newTask)
  res.json(newTask)
})

app.listen(3001, () => {
  console.log('✅ Server is running on http://localhost:3001 — CORS исправлен!')
})