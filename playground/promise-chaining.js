require('../src/db/mongoose')
const User = require('../src/models/user')

// 5c9b0de2c32ff849c823d99b

User.findByIdAndUpdate('5c9b0fc6d291011bf092ee4a', { age: 1 })
  .then((user) => {
    console.log(user)
    return User.countDocuments({ age: 1 })
  })
  .then((count) => {
    console.log(count)
  })
  .catch((e) => {
    console.log(e)
  })
