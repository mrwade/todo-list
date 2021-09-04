export type Task = {
  id: string;
  label: string;
  isComplete: boolean;
};

export type TasksProps = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};
