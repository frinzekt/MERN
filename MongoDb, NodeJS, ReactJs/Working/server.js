/*

import config, { nodeEnv, logStars } from "./config"

console.log(config, nodeEnv);
logStars("Nice One")

*/

//DEMONSTRATION FOR MODULES AS CLIENTS
/*
//imports and method depends on whether using http or https
import https from 'https';

https.get('https://www.lynda.com', res => { //res -> response
    //Status Code on the stream
    console.log('Response status code: ', res.statusCode);
    
    //Data Event listening on the stream
    //Every event gives a chunk buffer
    res.on("data", chunk => {
      console.log(chunk.toString());
    });
});*/

// DEMONSTRATION FOR MODULE AS SERVER
import http from 'http';

const server = http.createServer();

server.listen(8081); //Running server on specific port

//Create server creates an event emitter object eg. Request event
//2 object: request and response
console.log("Start");
//Response Maker -> Satisfying Request
server.on('request', (req, res) => {
    res.write("HELLO HTTP!\n");
    setTimeout(() => {
        res.write('I can stream!\n');
        res.end();
    }, 3000); //Timer after 3 seconds
});

//To make request "curl http://localhost:8081"

/*Note by default, the http createServer() can handle the Response and Request Events
Hence it can be designed to look like this instead. Erasing the "server.on" function*/

/*
const server = http.createServer((req, res) => {
  res.write("HELLO HTTP!\n");
  setTimeout(() => {
    res.write("I can stream!\n");
    res.end();
  }, 3000); //Timer after 3 seconds
});*/