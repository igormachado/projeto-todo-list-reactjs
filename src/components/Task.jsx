
import styles from "./Task.module.css"
import { Clipboard } from "@phosphor-icons/react"
import { TaskHeader } from "./TaskHeader";

export function Task() {
    return(
        <>
        {/* <TaskHeader/> */}
        <div className={styles.content}>
                <Clipboard className={styles.clipboardImg} />

                <p> Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
            </>
    );
}