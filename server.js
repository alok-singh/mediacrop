'use strict';

import http from 'http';
import express from 'express';
import fs from 'fs';

const app = express();


// *********************** pages routes ************************** //

app.get('/dragonFight', function (req, res) {
	getFileFromPath(`./Build/HTML/DragonFight/index.html`, res);
});

// *********************** static files ************************** //

app.get('/Templates/*', function (req, res) {
	let params = req.url.split("/");
	let fileName = params.pop();
	let folderName = params.pop();
	getFileFromPath(`./Build/HTML/${folderName}/Templates/${fileName}`, res);
});

app.get('/JS/*', function(req, res) {
	let filePath = "./Build/JS/" + req.url.split("/").pop();
	getFileFromPath(filePath, res, {'Content-Type': 'application/javascript'});
});

app.get('/CSS/*', function(req, res) {
	let filePath = "./Build/CSS/" + req.url.split("/").pop();
	getFileFromPath(filePath, res, {'Content-Type': 'text/css'});
});

app.get('/IMG/*', function(req, res) {
	let params = req.url.split("/");
	let fileName = params.pop();
	let folderName = params.pop();
	let filePath = `./Images/${folderName}/${fileName}`;
	getFileFromPath(filePath, res, {
		'Content-Type': 'image/png', 
		'Cache-Control': 'public, max-age=31557600'
	});
});

// *********************** exception handling ************************** //

app.get('/*', function(req, res) {
	sendTo404(res);
});

// *********************** helper function ************************** //

let getFileFromPath = (filePath, res, contentType={'Content-Type': 'text/html'})  => {
	fs.readFile(filePath, function(err, data){
		if(err){
			sendTo404(res);
		}
		else{
			res.writeHead(200, contentType);
			res.write(data);
			res.end();
		}
	});
}

let sendTo404 = (res) => {
	res.writeHead(404, {'Content-Type': 'text'});
	res.write("404 Not found");
	res.end();
}


// *********************** server start ************************** //

http.createServer(app).listen(8080);
console.log("server startted in port 8080");