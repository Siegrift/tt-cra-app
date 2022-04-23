const express = require('express')
const app = express()
const port = 3000

app.use((_req, res, next) => {
  res.set('Content-Security-Policy', "require-trusted-types-for 'script'; trusted-types webpack-policy tt-cra-app;")
  next()
})
app.use(express.static('build'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
