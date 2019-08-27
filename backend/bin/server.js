const app = require('../default')
const PORT = process.env.PORT || 4000


app.listen(PORT, () => console.log(`Server Started! Listening on port ${PORT}`))
