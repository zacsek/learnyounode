var fs = require('fs');

if ( process.argv.length >= 2 ) {
	var file = fs.readFileSync(process.argv[2]);
	var lines = file.toString().split("\n");
	console.log(lines.length - 1);
}
