import styles from "./TaskHeader.module.css";

export function TaskHeader() {
  return (
    <>
      <div className={styles.container}>
        <header className={styles.headerContainer}>
          <p className={styles.createdTask}>
            Tarefas criadas
            <span>0</span>
          </p>
          <p className={styles.doneTask}>
            Concluídas
            <span>0</span>
          </p>
        </header>
      </div>
    </>
  );
}
