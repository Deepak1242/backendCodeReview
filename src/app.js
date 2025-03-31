const express = require('express');
const aiRoutes = require('./routes/ai.routes')
const cors = require('cors')
const helmet = require('helmet')

const app = express()

app.use(cors());  

app.use(helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'", "https://backendcodereview.onrender.com"],
        styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
        fontSrc: ["'self'", "data:", "https://backendcodereview.onrender.com"],
        imgSrc: ["'self'", "data:"],
        connectSrc: ["'self'", "https://backendcodereview.onrender.com"],
      },
    },
  }))


app.use(express.json())


app.use('/ai', aiRoutes)

module.exports = app