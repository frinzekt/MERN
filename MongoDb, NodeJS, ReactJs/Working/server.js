import config from "./config";
import path from "path"; //when using any kind of path, path has to be imported
//import fs from "fs"; //used for returning web file from file server to requested routing path
import sassMiddleware from "node-sass-middleware";
//incorporating Sass/CSS to be used in the server

import express from "express";
import apiRouter from "./api"; //apiRouter for routing API from index.js (see example here)

const server = express(); //CREATE SERVER

/*
Express can listen to more than one single request event
It can also handle server-side routing that can expose API
to listen to certain routes eg. server.get
*/

//This is an object used to integrate sass to the server which takes an object
server.use(
	sassMiddleware({
		src: path.join(__dirname, "scss"),
		dest: path.join(__dirname, "public")
	})
);

server.set("view engine", "ejs");

import serverRender from "./serverRender";

//HANDLES THE PATH HAPPENING IN ROOT
server.get(["/","/contest/:contestId"], (req, res) => {
	//req.params.contestId -> displays the contestId which can be used for logical
	//Note: the route could also be used for the logical statement
	let contestId = req.params.contestId;
	serverRender(contestId)
		.then(({ initialMarkup, initialData }) => {
			res.render("index", {
				initialMarkup,
				initialData
			});
		})
		.catch(console.error);
});

server.use("/api", apiRouter);
//Express has a static middleware which serves static files easily
server.use(express.static("public"));

server.listen(config.port, config.host, () => {
	//Success Handler on CallBack Function
	console.info("Express Listening on port ", config.port);
});
//PORT and Success Handler
