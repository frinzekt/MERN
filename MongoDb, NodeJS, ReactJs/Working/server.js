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

server.set("view engine", "ejs");

server.get("/", (req, res) => {
	//To render EJS component omitting the extension as default
	//Render has two arguments, path and variable passing
	res.render("index", {
		content: "Hello This is Variable passing of <em>var content</em>"
	});
});

server.use("/api", apiRouter);
//Express has a static middleware which serves static files easily
server.use(express.static("public"));

server.listen(config.port, () => {
	//Success Handler on CallBack Function
	console.info("Express Listening on port ", config.port);
});
//PORT and Success Handler
