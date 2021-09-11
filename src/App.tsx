import React from 'react';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import TaskContext from './contexts/task-store';
import useLocalStorage from './hooks/use-local-storage';
import FocusScreen from './screens/FocusScreen';
import ListScreen from './screens/ListScreen';
import { Task } from './types';

function App() {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);

  return (
    <BrowserRouter>
      <TaskContext.Provider value={[tasks, setTasks]}>
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
            <ListScreen />
          </Route>
          <Route path="/focus">
            <FocusScreen />
          </Route>
        </Switch>
      </TaskContext.Provider>
    </BrowserRouter>
  );
}

export default App;
