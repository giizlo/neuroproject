const http = require("node:http");
const fs = require("node:fs");

const settings = 'properties.json';
const props = JSON.parse(fs.readFileSync(settings, 'utf8'))

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.statusMessage = "test bitch";
    res.setHeader('Content-Type', 'text/plain');
    res.end("You are first");
});

server.listen(props.port, props.host, () => {
    console.log(`//server is listening, running https://${props.host}:${props.port}/`);
});