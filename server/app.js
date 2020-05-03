var express = require('express')

const path = require('path')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

var app = express()
app.use(logger('common'))
app.use(bodyParser.json())
app.use(cookieParser());
app.use(methodOverride())

app.use('/', express.static(path.join('../src')));

var http = require('http').Server(app);
var io = require('socket.io')(http);



var server = http.listen(3002, () => {
    console.log('Http server listening on port %d ', server.address().port)
});