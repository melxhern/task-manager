import { ServerResponse, IncomingMessage } from "http";
import tasks from '../data/tasks';

function getTasks(req: IncomingMessage, res: ServerResponse): void {
    // send success response
    res.writeHead(200, { 'Content-Type': 'application/json' });
    // send the list of tasks as JSON body
    res.end(JSON.stringify(tasks));
}

export default getTasks;
