const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//   res.status(503).send({ error: 'site is down. please try back again shortly' })
// })

// const multer = require('multer')
// const upload = multer({
//   dest: 'images',
//   limits: {
//     fileSize: 1000000
//   },
//   fileFilter(req, file, cb) {
//     if (!file.originalname.match(/\.(doc|docx)$/)) {
//       return cb(new Error('Please provide a word doc'))
//     }

//     cb(undefined, true)
//     // cb(new Error('File must be a PDF'))
//     // cb(undefined, true)
//     // cb(undefined, false)
//   }
// })

// const errorMiddleware = (req, res, next) => {
//   throw new Error('from my middle ware')
// }

// app.post(
//   '/upload',
//   upload.single('upload'),
//   (req, res) => {
//     res.send()
//   },
//   (error, req, res, next) => {
//     res.status(400).send({
//       error: error.message
//     })
//   }
// )

app.use(express.json(), userRouter, taskRouter)

app.listen(port, () => {
  console.log(`Server is up on port: ${port}`)
})
