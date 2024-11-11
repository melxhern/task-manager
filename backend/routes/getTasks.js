"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tasks_1 = require("../data/tasks");
function getTasks(req, res) {
    // send success response
    res.writeHead(200, { 'Content-Type': 'application/json' });
    // send the list of tasks as JSON body
    res.end(JSON.stringify(tasks_1.default));
}
exports.default = getTasks;
