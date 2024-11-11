import "./TaskManager.css";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

function Main() {
  return (
    <div className="main">
      <div className="get-tasks">
        <h1>Tasks</h1>
        <FetchTask />
      </div>
      <div className="post-tasks">
        <h1>Create New Task</h1>
        <CreateTask />
      </div>
    </div>
  );
}

/// Fetch the tasks from the api
const FetchTask = () => {
  const [tasks, setTasks] = useState([]);

  // use useEffect to get the tasks from the api
  useEffect(() => {
    fetch("http://localhost:3000/tasks")
      .then((res) => {
        // parse the response to JSON after request successful
        return res.json();
      })

      .then((data) => {
        // update state with the data
        setTasks(data);
      });
  }, []);

  return (
    <div className="tasks-container">
      {tasks.map((task) => (
        <div key={task.id} className="task-card">
          <p>
            <strong>ID :</strong> {task.id}
          </p>
          <p>
            <strong>Title :</strong> {task.title}
          </p>
        </div>
      ))}
    </div>
  );
};

/// Create a new task and POST it on the api
function CreateTask() {
  const titleRef = useRef();
  const [title, setTitle] = useState(""); // track the input value

  // track change for the enabling of the button
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async () => {
    // get the value of the title
    const title = titleRef.current.value;

    // use axios to post
    const res = await axios.post("http://localhost:3000/tasks", {
      id: uuidv4(),
      title,
    });

    // reload the page to fetch the new task
    window.location.reload();
  };

  return (
    <div className="task-card">
      <label>
        <strong>Title : </strong>
        <input
          name="title"
          value={title}
          ref={titleRef}
          onChange={handleChange}
        />
      </label>
      <button onClick={handleSubmit} disabled={!title}>
        Create
      </button>
    </div>
  );
}

export default Main;
