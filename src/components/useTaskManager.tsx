import { useState } from 'react';

interface Task {
  id: number;
  title: string;
  searchKeyword: string;
  task: string;
  completed: boolean;
}

interface UseTaskManagerReturnType {
  tasks: Task[];
  addTask: (task: Task) => void;
  deleteTask: (id: number) => void;
  updateTask: (id: number, updatedTask: Partial<Task>) => void;
  filterTasks: (keyword: string) => Task[];
}

const useTaskManager = (): UseTaskManagerReturnType => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task): void => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id: number): void => {
    setTasks(tasks.filter((task: { id: number; }) => task.id !== id));
  };

  const updateTask = (id: number, updatedTask: Partial<Task>): void => {
    setTasks(tasks.map((task: { id: number; }) => (task.id === id ? { ...task, ...updatedTask } : task)));
  };

  const filterTasks = (keyword: string): Task[] => {
    return tasks.filter((task: { title: string; searchKeyword: string; task: string; }) =>
      task.title.toLowerCase().includes(keyword.toLowerCase()) ||
      task.searchKeyword.toLowerCase().includes(keyword.toLowerCase()) ||
      task.task.toLowerCase().includes(keyword.toLowerCase())
    );
  };

  return {
    tasks,
    addTask,
    deleteTask,
    updateTask,
    filterTasks
  };
};

export default useTaskManager;