var readline = require('readline');
var fs = require("fs");
var file = "data/sqlite.db";
var exists = fs.existsSync(file);
var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(file);


var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});


q();

function q(){

	rl.question("sqlite>", function(query) {
		if(query.toLowerCase().indexOf("select") > -1)
			db.each(query, function(err, row) {
		    	console.log(row);
			});
		else if(query.toLowerCase()=="quit")
			return rl.close();
		else
			db.run(query);
		q();

	});

}