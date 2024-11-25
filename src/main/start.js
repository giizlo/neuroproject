const http = require("node:http");
const fs = require("node:fs");



class serv {
    constructor(settings) {
        this.props = JSON.parse(fs.readFileSync(settings, 'utf8'));
    }

    run() {
        this.server = http.createServer((req, res) => {
            res.end("You are first");
        });
        
        this.server.listen(this.props.port, this.props.host, () => {
            console.log(`//server is listening, running https://${this.props.host}:${this.props.port}/`);
            // this.update();
        });
    }

    update() {
        this.running = 1;
        // while (this.running) {
        // }
        console.log(this.server.listeners);
    }

    OnDataReceived() {}

    auth() {}

    client() {}

    broadcast() {}
    
}

const Main = new serv('properties.json');
Main.run();
