import { useState, useEffect } from "react";
import axios from "axios";
import { List, Box, Button, TextField } from "@mui/material";
import "./style.css";
import TaskCard from "../Components/TaskCard";

interface Task {
  _id: string;
  title: string;
  description: string;
}

function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [showDescription, setShowDescription] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/tasks")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar tarefas:", error);
      });
  }, []);

  const addTask = () => {
    axios
      .post("http://localhost:8080/tasks", {
        title: taskName,
        description: taskDescription,
      })
      .then((response) => {
        setTasks([...tasks, response.data]);
        setTaskName("");
        setTaskDescription("");
      })
      .catch((error) => {
        console.error("Erro ao adicionar tarefa:", error);
      });
  };

  const toggleDescription = (taskId: string) => {
    if (showDescription && selectedTask && selectedTask._id === taskId) {
      setShowDescription(false);
      setSelectedTask(null);
    } else {
      const taskToShow = tasks.find((task) => task._id === taskId);
      if (taskToShow) {
        setShowDescription(true);
        setSelectedTask(taskToShow);
      }
    }
  };

  const deleteTask = (taskId: string) => {
    axios
      .delete(`http://localhost:8080/tasks/${taskId}`)
      .then(() => {
        const updatedTasks = tasks.filter((task) => task._id !== taskId);
        setTasks(updatedTasks);
      })
      .catch((error) => {
        console.error("Erro ao excluir tarefa:", error);
      });
  };
  const toggleDescriptions = () => {
    setShowDescription(!showDescription);
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div className="container">
      <h1 className="title">Lista de Tarefas</h1>
      <Box mb={2}>
        <TextField
          label="Nova Tarefa"
          variant="outlined"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          sx={{
            width: "100%",
            "& input": {
              backgroundColor: "#333333",
              color: "#bdd1de",
            },
            "& label": {
              color: "#bdd1de",
            },
            "&:focus": {
              "& input": {
                borderColor: "#4180ab",
              },
            },
          }}
        />
      </Box>
      <Box mb={2}>
        <TextField
          label="Descrição da Tarefa"
          variant="outlined"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          sx={{
            width: "100%",
            "& input": {
              backgroundColor: "#333333",
              color: "#bdd1de",
            },
            "& label": {
              color: "#bdd1de",
            },
          }}
        />
      </Box>
      <Button variant="contained" color="primary" onClick={addTask}>
        Adicionar Tarefa
      </Button>
      <Button
        variant="outlined"
        color="primary"
        onClick={toggleDescriptions}
        disabled={!filteredTasks.length}
        sx={{ marginLeft: "10px" }}
      >
        {showDescription ? "Ocultar Descrições" : "Ver Descrições"}
      </Button>

      <TextField
        label="Filtrar Tarefas"
        variant="outlined"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        fullWidth
        sx={{
          width: "250px",
          marginLeft: "600px",
          borderRadius: "655px",
          "& input": {
            backgroundColor: "#333333",
            color: "#bdd1de",
          },
          "& label": {
            color: "#bdd1de",
          },
        }}
      />

      <List>
        {filteredTasks.map((task) => (
          <div>
            <TaskCard
              key={task._id}
              task={task}
              showDescription={showDescription}
              toggleDescription={() => toggleDescription(task._id)}
              deleteTask={() => deleteTask(task._id)}
            />
          </div>
        ))}
      </List>
    </div>
  );
}

export default TaskList;
