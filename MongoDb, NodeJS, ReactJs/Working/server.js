import config from "./config";
//import fs from "fs"; //used for returning web file from file server to requested routing path
import express from "express";
import apiRouter from "./api"; //apiRouter for routing API from index.js (see example here)
const server = express(); //CREATE SERVER

/*
Express can listen to more than one single request event
It can also handle server-side routing that can expose API
to listen to certain routes eg. server.get
*/

server.get("/", (req, res) => {
	//Two parameters: path server for "Req and Res", and request and response routes
	res.send("Hello Express");
});

server.use("/api", apiRouter);
//Express has a static middleware which serves static files easily
server.use(express.static("public"));

/*
server.get("/about.html", (req, res) => {
	//res.send("This is about page");
	fs.readFile("./about.html", (err, data) => {
		//Reads the data of the file and turns it into a string for sending
		res.send(data.toString());
	});
});*/

server.listen(config.port, () => {
	//Success Handler on CallBack Function
	console.info("Express Listening on port ", config.port);
});
//PORT and Success Handler
