// Implement tasks here
import { v4 as uuidv4 } from 'uuid';

export interface Task {
  id: string;
  title: string;
}

const tasks: Task[] = [
  { id: uuidv4(), title: 'Do the test for Creastyle' },
  { id: uuidv4(), title: 'Create the room prefabs on Unity' },
  { id: uuidv4(), title: 'Prepare the reunion for the school project' }
];
export default tasks;
