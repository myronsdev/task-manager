const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true
})

const Task = mongoose.model('Task', {
  description: {
    type: String,
    trim: true,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
})

const task = new Task({
  description: '   Build desk'
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
//     type: String,
//     required: true,
//     trim: true
//   },
//   password: {
//     type: String,
//     required: true,
//     trim: true,
//     minlength: 7,
//     validate(pass) {
//       if (pass.toLowerCase().includes('password')) {
//         throw new Error('Password cannot contain "password"!')
//       }
//     }
//   },
//   age: {
//     type: Number,
//     default: 0,
//     validate(value) {
//       if (value < 0) {
//         throw new Error('Age must be a positive number')
//       }
//     }
//   },
//   email: {
//     type: String,
//     required: true,
//     trim: true,
//     lowercase: true,
//     validate(email) {
//       if (!validator.isEmail(email)) {
//         throw new Error('Email is invalid')
//       }
//     }
//   }
// })

// const me = new User({
//   name: 'Basd',
//   email: 'bad@ace.io',
//   password: '   d2323   '
// })

// me.save()
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((err) => {
//     console.log('error', err)
//   })
