"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tasks_1 = require("../data/tasks");
function postTask(req, res) {
    var body = "";
    // read the incoming data
    req.on("data", function (data) {
        body += data;
    });
    req.on("end", function () {
        try {
            // parse the JSON data
            var newTask = JSON.parse(body);
            // add the new task to the array
            tasks_1.default.push(newTask);
            // send success response
            res.writeHead(201, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "Task created successfully", task: newTask }));
        }
        catch (error) {
            // handle JSON parsing errors
            res.writeHead(400, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ error: "Invalid JSON data" }));
        }
    });
}
exports.default = postTask;
