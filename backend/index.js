const express = require('express')
const GenerationEngine = require('./app/generation/engine.js')
const dragonRouter = require('./app/api/dragon')
const generationRouter = require('./app/api/generation')

const app = express();
const engine = new GenerationEngine()

app.locals.engine = engine
app.use('/dragon', dragonRouter)
app.use('/generation', generationRouter)

engine.start()

module.exports = app