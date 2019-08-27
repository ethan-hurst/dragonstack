const express = require('express')
const GenerationEngine = require('./app/generation/engine.js')
const app = express();
const engine = new GenerationEngine()

engine.start()

app.get('/dragon/new', (req, res) => {
  res.json({ dragon: engine.generation.newDragon() })
})



module.exports = app