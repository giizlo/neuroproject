const http = require("node:http");
const fs = require("node:fs");



class serv {
    constructor(settings) {
        this.props = JSON.parse(fs.readFileSync(settings, 'utf8'));
        this.run();        
    }

    run() {
        this.server = http.createServer((req, res) => {
            // console.log(req.client)
            this.update();
            if (/\/auth.*/.test(req.url)){
                this.auth(req);
                res.end("Auth page");
            }
            else {
                res.end("send ");
            }
        });
        
        this.server.listen(this.props.port, this.props.host, () => {
            console.log(`//server is listening, running https://${this.props.host}:${this.props.port}/`);
            this.update();
        });
    }

    update() {
        this.running = 1;
        // while (this.running) {
        // }
        for (let i in this.server._connections) {
            console.log(1, i);
        }
    }

    OnDataReceived() {}

    auth(req) {
        console.log(`STATUS: ${req.statusCode}`);
        console.log(`HEADERS: ${JSON.stringify(req.headers)}`);
        req.on('data', (chunk) => {
            console.log(`BODY: ${chunk}`, );
        });
        
        req.on('end', () => {
            console.log('No more data in response.')
        });
    }

    client() {}

    broadcast() {}
    
}

const Main = new serv('properties.json');