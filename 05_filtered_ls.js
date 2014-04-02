var fs = require('fs');
var path = require('path');

if ( process.argv.length >= 2 ) {
	fs.readdir('.', function(error, list) {
		console.log(process.argv);
		for(var i = 0; i < list.length; ++i) {
			console.log("---->" + list[i] + " /  " + path.extname('js'));
			console.log("---->" + process.argv[3]);
			if ( path.extname(list[i]) == process.argv[2] ) {
				console.log(list[i]);
			}
		}
	});
}
