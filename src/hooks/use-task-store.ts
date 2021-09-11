import { shuffle } from 'lodash';
import { nanoid } from 'nanoid';
import { useContext, useEffect, useState } from 'react';
import TaskContext from '../contexts/task-store';
import { Task } from '../types';

const useTaskStore = () => {
  const [tasks, setTasks] = useContext(TaskContext);

  const [focusedTaskId, setFocusedTaskId] = useState<string | undefined>(
    tasks.filter((task) => !task.isComplete)[0]?.id
  );

  const addTask = (task: Pick<Task, 'label'>) => {
    const id = nanoid();
    setTasks((tasks) => [
      ...tasks,
      { id, label: task.label, isComplete: false },
    ]);
    if (!focusedTaskId) setFocusedTaskId(id);
  };

  const updateTaskCompletion = (taskId: string, isComplete: boolean) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === taskId) return { ...task, isComplete };
        return task;
      })
    );
  };

  const focusedTask = tasks.find((task) => task.id === focusedTaskId);

  useEffect(() => {
    if (focusedTask?.isComplete)
      setFocusedTaskId(tasks.filter((task) => !task.isComplete)[0]?.id);
  }, [tasks, focusedTask]);

  const shuffleFocusedTask = () => {
    setFocusedTaskId(shuffle(tasks.filter((task) => !task.isComplete))[0]?.id);
  };

  const api = {
    addTask,
    focusedTask,
    tasks,
    setTasks,
    shuffleFocusedTask,
    updateTaskCompletion,
  };

  return api;
};

export default useTaskStore;
