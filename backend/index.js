const express = require('express')
const routes = require("./routes")
const app = express();

const db = require("./models")
var cors = require('cors')

app.use(cors())

// environment variable PORT or 3000 if unset
const port = process.env.PORT || 3001;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
  req.models = db.models
  next()
})

app.use('/api', routes)

db.connectDb().then(() => {
  const listener = app.listen(port, () => {
    console.info(`Server is listening on port ${listener.address().port}.`);
  })
});
