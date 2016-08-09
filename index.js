var express = require("express");
var app = express();

app.get("/", function(req, res) {
	res.json({
		data: "ok"
	});
});

app.listen(3000);