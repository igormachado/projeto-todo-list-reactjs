import { PlusCircle, Circle, CheckCircle } from "@phosphor-icons/react";
import styles from "./CreateTask.module.css";
import { Children, useState } from "react";
import { Task } from "./Task";
import { TaskList } from "./TaskList";
import { TaskHeader } from "./TaskHeader";
// import  PlusCircle  from "@phosphor-icons/react";

export function CreateTask() {
  const [taskList, setTaskList] = useState([
    "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
  ]);
  const [newTaskList, setNewTaskList] = useState("");
  const [countNumberOfTask, setCountNumberOfTask] = useState(0);
  const [countNumberOfTaskDone, setCountNumberOfTaskDone] = useState(0);
  
  

  function handleCreateNewTask(e) {
    e.preventDefault();

    setTaskList([...taskList, newTaskList]);
    setNewTaskList("");
  }

  function handleNewTaskListChange(e) {
    setNewTaskList(e.target.value);
  }

  function deleteTask(taskToDelete) {
    const taskWithoutDeleteOne = taskList.filter((task) => {
      return task !== taskToDelete;
    });

    setTaskList(taskWithoutDeleteOne);
  }

  function handleChangeCountTask() {
    onCountTaskDone(countNumberOfTaskDone)
  }

  return (
    <>
      <form className={styles.criarTarefa} onSubmit={handleCreateNewTask}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          name="comment"
          onChange={handleNewTaskListChange}
          value={newTaskList}
        />
        <button>
          Criar
          <PlusCircle className={styles.plusIcon} />
        </button>
      </form>
      {/* <TaskHeader /> */}
      <div className={styles.container}>
        <header className={styles.headerContainer}>
          <p className={styles.createdTask}>
            Tarefas criadas
            <span>{taskList.length === 0 ? 0 : taskList.length}</span>
          </p>
          <p className={styles.doneTask}>
            Concluídas
            <span>{countNumberOfTaskDone}</span>
          </p>
        </header>
      </div>

      {taskList.length === 0 ? (
        <Task />
      ) : (
        taskList.map((item) => (
          <TaskList key={item} content={item} onDeleteTask={deleteTask} />
        ))
      )}
    </>
  );
}
