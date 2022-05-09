const express = require('express')
const app = require('express')()
const cors = require('cors')
const logger = require('morgan')
const AuthRouter = require('./routes/AuthRouter')
// const AppRouter = require('./routes/AppRouter')

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.json({ message: 'Server works' }))
// app.use('/api', AppRouter)
app.use('/auth', AuthRouter)
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))