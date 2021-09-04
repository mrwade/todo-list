import React, { useState } from 'react';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import FocusScreen from './screens/FocusScreen';
import ListScreen from './screens/ListScreen';
import { Task } from './types';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const updateTaskCompletion = (taskId: string, isComplete: boolean) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === taskId) return { ...task, isComplete };
        return task;
      })
    );
  };

  const tasksApi = { tasks, setTasks, updateTaskCompletion };

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
