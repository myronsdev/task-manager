const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//   res.status(503).send({ error: 'site is down. please try back again shortly' })
// })

app.use(express.json(), userRouter, taskRouter)

app.listen(port, () => {
  console.log(`Server is up on port: ${port}`)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
  // const task = await Task.findById('5ca2f742b43b9536144b75f3')
  // await task.populate('author').execPopulate()
  // console.log(task)

  const user = await User.findById('5ca2f60a569db4015c501aae')
  await user.populate('tasks').execPopulate()
  console.log(user.tasks)
}

main()
