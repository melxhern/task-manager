import { ServerResponse, IncomingMessage } from "http";
import tasks from '../data/tasks';

function postTask(req: IncomingMessage, res: ServerResponse): void {
    let body = "";

    // read the incoming data
    req.on("data", (data) => {
    body += data;
    });

    req.on("end", () => {
    try {
        // parse the JSON data
        const newTask = JSON.parse(body);

        // add the new task to the array
        tasks.push(newTask);

        // send success response
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Task created successfully", task: newTask }));

    } catch (error) {
        // handle JSON parsing errors
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Invalid JSON data" }));
    }
    });
    
}






export default postTask;
