import styles from "./Header.module.css"
import rocketLogo from "../assets/rocket.svg"
import todoLogo from "../assets/todo.svg"

export function Header() {
  return (
    <header className={styles.header}>
      <div>
        <img
          className={styles.rocketImage}
          src={rocketLogo}
          alt="rocket logo imagem"
        />
        <img
          className={styles.todoImage}
          src={todoLogo}
          alt="todo logo imagem"
        />
      </div>
    </header>
  );
}
