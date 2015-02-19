var express = require('express')
var app = express()

app.get('/', function (req, res) {
	res.sendfile('build/index.html')
})
app.use("/css", express.static(__dirname + '/build/css'))
var server = app.listen(8080, function () {

	var host = server.address().address
	var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})
