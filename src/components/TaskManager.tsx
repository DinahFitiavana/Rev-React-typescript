//import { nanoid } from "nanoid";
//import { useState } from "react";
import "./TaskManager.css";

interface Task {
  id: number;
  title: string;
  searchKeyword: string;
  task: string;
}

class TaskManager {
  private tasks: Task[];

  constructor() {
    this.tasks = [];
  }

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  getTask(id: number): Task | undefined {
    return this.tasks.find(task => task.id === id);
  }

  getAllTasks(): Task[] {
    return this.tasks;
  }
}

// Exemple d'utilisation
const taskManager = new TaskManager();

const task1: Task = {
  id: 1,
  title: "Faire les courses",
  searchKeyword: "courses, achats",
  task: "Acheter des légumes et du pain",
};

const task2: Task = {
  id: 2,
  title: "Faire du sport",
  searchKeyword: "sport, fitness",
  task: "Courir pendant 30 minutes",
};

taskManager.addTask(task1);
taskManager.addTask(task2);

console.log(taskManager.getAllTasks());


console.log(taskManager.getAllTasks());


/**
// TODO: create custom hook to manage task state
export const TaskManager = () => {
  const [title, setTitle] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [tasks, setTasks] = useState([]);

  // remove task from list
  const completeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = (id, taskUpdate) => {
    const newTasks = tasks.slice();

    const index = tasks.findIndex((task) => task.id === id);

    newTasks[index] = taskUpdate;

    setTasks(newTasks);
  };

  const addTask = () => {
    if (title.length < 1) {
      return;
    }

    const newTask = {
      // using nanoid to generate unique id
      id: nanoid(),
      title,
    };
    setTasks((prev) => prev.concat(newTask));
    setTitle("");
  };

  const handleSearch = (ev) => {
    setSearchKeyword(ev.target.value);
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchKeyword.toLowerCase()),
  );

  return (
    <div className="container">
      <h1>Task Manager</h1>

      <div>
        <input type="text" onChange={handleSearch} placeholder="Search Task" />
      </div>

      <div className="task">
        <input
          type="text"
          value={title}
          onChange={(ev) => {
            setTitle(ev.target.value);
          }}
        />

        <button onClick={addTask}>Add Task</button>
      </div>

      <ul className="container">
        {filteredTasks.map((task) => (
          <li key={task.id} className="task">
            <div className="task">
              <input
                type="text"
                placeholder="Add new task"
                value={task.title}
                onChange={(e) => updateTask(task.id, { title: e.target.value })}
              />
              <button onClick={() => completeTask(task.id)}>Done</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
*/
