import styles from "./logo.module.css";

export function Logo() {
  return (
    <div className={styles.brand}>
      <div>
        <div>
          <span className={styles["high-letter"]}>E</span>
          lizangela
        </div>

        <div className={styles["second-stage"]}>
          <span className={styles["high-letter"]}>T</span>
          eles
        </div>
      </div>

      <div className={styles["slogan-stage"]}>
        <span className={styles.slogan}>Psicóloga</span>
      </div>
    </div>
  );
}
