const Generation = require('./index')

class GenerationEngine {
  constructor() {
    this.generation = null
    this.timer = null
  }

  start() {
    this.buildNewGeneration()
  }

  stop() {
    clearTimeout(this.timer)
  }

  buildNewGeneration() {
    this.timer = this.generation = new Generation();
    console.log('New Generation!', this.generation)
    setTimeout(
      () => this.buildNewGeneration(), this.generation.expiration.getTime() - Date.now())
  }
}

module.exports = GenerationEngine