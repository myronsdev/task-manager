const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = require('../../src/models/user')
const Task = require('../../src/models/task')

const userOneId = new mongoose.Types.ObjectId()
const userOne = {
  _id: userOneId,
  name: 'Usey Testey',
  email: 'usey@example.com',
  password: 'Seh12000ty',
  tokens: [
    {
      token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET)
    }
  ]
}

const userTwoId = new mongoose.Types.ObjectId()
const userTwo = {
  _id: userTwoId,
  name: 'Mikey Testey',
  email: 'mikey@example.com',
  password: 'myhouse1910',
  tokens: [
    {
      token: jwt.sign({ _id: userTwoId }, process.env.JWT_SECRET)
    }
  ]
}

const taskOne = {
  _id: new mongoose.Types.ObjectId(),
  description: 'New task description',
  completed: false,
  author: userOneId
}

const taskTwo = {
  _id: new mongoose.Types.ObjectId(),
  description: 'Second task description',
  completed: true,
  author: userOneId
}

const taskThree = {
  _id: new mongoose.Types.ObjectId(),
  description: 'Third task description',
  completed: true,
  author: userTwoId
}

const setupDatabase = async () => {
  await User.deleteMany()
  await Task.deleteMany()
  await new User(userOne).save()
  await new User(userTwo).save()
  await new Task(taskOne).save()
  await new Task(taskTwo).save()
  await new Task(taskThree).save()
}

module.exports = {
  userOne,
  userOneId,
  setupDatabase,
  userTwoId,
  userTwo,
  userOne,
  taskOne,
  taskTwo,
  taskThree
}
