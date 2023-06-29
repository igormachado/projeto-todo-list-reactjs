import { CheckCircle, Circle, Trash } from "@phosphor-icons/react";
import styles from "./TaskList.module.css";
import { TaskHeader } from "./TaskHeader";
import { useState } from "react";

export function TaskList({ content, onDeleteTask}) {
  const [textDecorationLine, setTextDecorationLine] = useState("none");
  const [isTextDecorationLine, setIsTextDecorationLine] = useState(false);
  const [countTaskDone, setCountTaskDone] = useState(0);

  function handleDeleteTask() {
    // console.log("Deletar")
    onDeleteTask(content);
  }

  function handleTextDecorationChange() {
    setIsTextDecorationLine(!isTextDecorationLine);
    setTextDecorationLine(isTextDecorationLine ? "line-through" : "none");
    setCountTaskDone(countTaskDone+1)
  }

  function handleTextDecoration() {
    setIsTextDecorationLine(!isTextDecorationLine)
    setCountTaskDone(countTaskDone+1);
    onTaskDecoration(countTaskDone)
    console.log(countTaskDone)
  }

  return (
    <>
      <div className={styles.containerTaskList}>
        <div className={styles.content}>
          <button
            onClick={handleTextDecorationChange}
            title="checked item na lista"
          >
            {textDecorationLine === "none" ? (
              <Circle className={styles.circleImg} />
            ) : (
              <CheckCircle className={styles.checkImg} />
            )}
          </button>
          <p style={{ textDecorationLine: textDecorationLine }}>{content}</p>
          <button onClick={handleDeleteTask} title="Deletar task">
            <Trash className={styles.trashImg} />
          </button>
        </div>
      </div>
    </>
  );
}
