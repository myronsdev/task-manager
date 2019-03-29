require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5c9d82ca5d72d22be4b36a6a')
//   .then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
//   })
//   .then((count) => {
//     console.log(count)
//   })
//   .catch((e) => {
//     console.log(e)
//   })

const deteleTaskAndCount = async (id) => {
  await Task.findByIdAndDelete(id)
  const count = await Task.countDocuments({ completed: false })

  return count
}

deteleTaskAndCount('5c9d8e9ac4f51e3dbcffd452')
  .then((count) => {
    console.log(count)
  })
  .catch((e) => {
    console.log(e)
  })
