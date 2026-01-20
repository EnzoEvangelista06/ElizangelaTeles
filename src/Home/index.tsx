import { Button } from "../components/Button";
import styles from "./home.module.css";

export function Home() {
  return (
    <section className={styles.home}>
      <div className={styles["text-section"]}>
        <div className={styles.title}>
          <h1>
            Cuidar da sua saúde mental é um ato de <span>amor</span>
          </h1>

          <p>
            Ofereço um espaço seguro e acolhedor para você se redescobrir,
            superar desafios e construir uma vida mais equilibrada e
            significativa.
          </p>
        </div>

        <div className={styles["button-section"]}>
          <Button url="contact">Agendar consulta online</Button>
          <Button type="no-fill" url="specialties">
            Minhas especialidades
          </Button>
        </div>
      </div>
    </section>
  );
}
