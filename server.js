var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')
var JsonDB = require('node-json-db')

var express = require('express')
var app = express()
var port = 3000
var path = require('path');

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))


app.use('/logs', express.static(path.join(__dirname + '/logs')));

// for demo purposes don't do this
app.post('/savejson', function (req, res) {
  var filename = req.body.filename
  var db = new JsonDB('logs/' + filename, true, false)
  try {
    db.push('/', req.body.actions)
    res.send('saved ' + filename + '.json')
  } catch (error) {
    res.send('failed to save ' + filename + '.json')
  }
})

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.listen(port, function (error) {
  if (error) {
    console.error(error)
  } else {
    console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port)
  }
})
