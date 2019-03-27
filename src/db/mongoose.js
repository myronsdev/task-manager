const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true
})

const Task = mongoose.model('Task', {
  description: {
    type: String
  },
  completed: {
    type: Boolean
  }
})

const task = new Task({
  description: 'Clean house',
  completed: false
})

task
  .save()
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })

// const User = mongoose.model('User', {
//   name: {
//     type: String
//   },
//   age: {
//     type: Number
//   }
// })

// const me = new User({
//   name: 'Myron',
//   age: 'mike'
// })

// me.save()
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((err) => {
//     console.log('error', err)
//   })
