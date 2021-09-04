export type Task = {
  id: string;
  label: string;
  isComplete: boolean;
};

export type TasksProps = {
  addTask: (task: Pick<Task, 'label'>) => void;
  focusedTask?: Task;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  shuffleFocusedTask: () => void;
  updateTaskCompletion: (taskId: string, isComplete: boolean) => void;
};
