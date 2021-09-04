import { nanoid } from 'nanoid';
import React, { ChangeEvent, KeyboardEvent, useState } from 'react';

type Props = {};

type Task = {
  id: string;
  label: string;
};

const ListScreen: React.FC<Props> = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskLabel, setNewTaskLabel] = useState('');

  const handleNewTaskLabelChange = (e: ChangeEvent<HTMLInputElement>) =>
    setNewTaskLabel(e.target.value);

  const handleNewTaskKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newTaskLabel !== '') {
      setTasks((tasks) => [...tasks, { id: nanoid(), label: newTaskLabel }]);
      setNewTaskLabel('');
    }
  };

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.label}</li>
        ))}
      </ul>
      <input
        value={newTaskLabel}
        onChange={handleNewTaskLabelChange}
        onKeyPress={handleNewTaskKeyPress}
      />
    </div>
  );
};

export default ListScreen;
