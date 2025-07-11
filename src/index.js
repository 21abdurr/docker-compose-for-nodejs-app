import express from "express"
import dotenv from "dotenv"

const env = dotenv.config().parsed
const app = express()
const port = process.env.APP_PORT || 3000

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
