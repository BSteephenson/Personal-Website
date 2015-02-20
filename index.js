var express = require('express')
var app = express()
var exec = require('child_process').exec;

var secret_url = require('./secret_url.js')

app.post(secret_url, function(){
	exec('git pull', function(err, stdout, stderr){
		exec('gulp jade', function(e, s, se){
			exec('gulp stylus', function(e, s, se){
				console.log("Git pulled and rebuilt")
			})
		})
	})
})

app.use("/", express.static(__dirname + '/build/'))

var server = app.listen(8080, function () {

	var host = server.address().address
	var port = server.address().port

  console.log('App listening at http://%s:%s', host, port)

})
