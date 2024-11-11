"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var router_1 = require("./router");
var PORT = 3000;
var server = http.createServer(function (req, res) {
    // handle cors from the frontend 
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    // handle OPTIONS requests
    if (req.method === "OPTIONS") {
        res.writeHead(204); // No Content
        res.end();
        return;
    }
    (0, router_1.default)(req, res);
});
server.listen(PORT, function () {
    console.log("Server running on http://localhost:".concat(PORT));
});
