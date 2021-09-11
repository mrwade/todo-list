import { createContext } from 'react';
import { Task } from '../types';

const TaskContext = createContext<
  [Task[], React.Dispatch<React.SetStateAction<Task[]>>]
>([[], () => {}]);

export default TaskContext;
