import { shuffle } from 'lodash';
import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import useLocalStorage from './hooks/use-local-storage';
import FocusScreen from './screens/FocusScreen';
import ListScreen from './screens/ListScreen';
import { Task } from './types';

function App() {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);
  const [focusedTaskId, setFocusedTaskId] = useState<string | undefined>(
    undefined
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

  const shuffleFocusedTask = () => {
    setFocusedTaskId(shuffle(tasks.filter((task) => !task.isComplete))[0]?.id);
  };

  const tasksApi = {
    addTask,
    focusedTask,
    tasks,
    setTasks,
    shuffleFocusedTask,
    updateTaskCompletion,
  };

  return (
    <BrowserRouter>
      <nav>
        <NavLink exact to="/" activeStyle={{ fontWeight: 'bold' }}>
          List
        </NavLink>{' '}
        -{' '}
        <NavLink to="/focus" activeStyle={{ fontWeight: 'bold' }}>
          Focus
        </NavLink>
      </nav>
      <br />

      <Switch>
        <Route exact path="/">
          <ListScreen {...tasksApi} />
        </Route>
        <Route path="/focus">
          <FocusScreen {...tasksApi} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
