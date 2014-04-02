var fs = require('fs')

if ( process.argv.length >= 2 ) {
	var lines = 0;
	var file = fs.readFile(process.argv[2], function(error, data) {
		if ( !!error ) {
			console.log("Error occured: " + error.toString());
		}
		lines += data.toString().split("\n").length;
		console.log(lines - 1);
	})
}
