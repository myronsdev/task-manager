require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5c9d82ca5d72d22be4b36a6a')
  .then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false })
  })
  .then((count) => {
    console.log(count)
  })
  .catch((e) => {
    console.log(e)
  })
