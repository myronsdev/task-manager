const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json(), userRouter, taskRouter)

app.listen(port, () => {
  console.log(`Server is up on port: ${port}`)
})

const jwt = require('jsonwebtoken')

const myFunc = async () => {
  const token = jwt.sign({ _id: 'abc123' }, 'thisismynewapp', {
    expiresIn: '7 days'
  })

  const payload = jwt.verify(token, 'thisismynewapp')

  console.log(token)
  console.log(payload)
}

myFunc()
