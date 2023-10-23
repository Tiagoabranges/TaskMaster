import { ListItem, ListItemText, Button } from "@mui/material";
import "./TaskCard.css";
interface Task {
  _id: string;
  title: string;
  description: string;
}

interface TaskCardProps {
  task: Task;
  showDescription: boolean | null;
  toggleDescription: (taskId: string) => void;
  deleteTask: (taskId: string) => void;
}

function TaskCard({
  task,
  showDescription,
  toggleDescription,
  deleteTask,
}: TaskCardProps) {
  return (
    <ListItem key={task._id} className="task-card">
      <ListItemText
        primary={task.title}
        onClick={() => toggleDescription(task._id)}
        className="task-card "
      />
      {showDescription === true && (
        <ListItemText primary={task.description} className="task-card" />
      )}

      <Button
        variant="contained"
        color="secondary"
        onClick={() => deleteTask(task._id)}
      >
        Excluir
      </Button>
    </ListItem>
  );
}

export default TaskCard;
