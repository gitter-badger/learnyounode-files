var http = require('http')


var url = process.argv[2]
http.get(url, function(res) {
	res.on("error", function(err) {
		console.log('error: ', err)
	})

	res.on("data", function(data) {

		console.log(data.toString())
		//var arr = data.toString().split('\n')
		//console.log('arr:', arr)
		//arr.forEach(function(str) {
		//	console.log('str', str)
		//})
	})

})