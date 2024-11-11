"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Implement tasks here
var uuid_1 = require("uuid");
var tasks = [
    { id: (0, uuid_1.v4)(), title: 'Do the test for Creastyle' },
    { id: (0, uuid_1.v4)(), title: 'Create the room prefabs on Unity' },
    { id: (0, uuid_1.v4)(), title: 'Prepare the reunion for the school project' }
];
exports.default = tasks;
