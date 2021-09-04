import React from 'react';
import { TasksProps } from '../types';

type Props = TasksProps & {};

const FocusScreen: React.FC<Props> = ({ tasks }) => {
  const task = tasks[0];

  return task ? <div>{task.label}</div> : <div>No tasks.</div>;
};

export default FocusScreen;
