var fs = require('fs');
var path = require('path');

if ( process.argv.length >= 3 ) {
	dir = process.argv[2];
	ext = "." + process.argv[3];
	fs.readdir(dir, function(error, list) {
		for(var i = 0; i < list.length; ++i) {
			extname = path.extname( list[i] );
			if ( path.extname(list[i]) === ext ) {
				console.log(list[i]);
			}
		}
	});
}
