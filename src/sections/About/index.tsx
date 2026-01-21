import elizangelaImage from "../../assets/elizangela-teles.jpeg";
import styles from "./about.module.css";

export function About() {
  return (
    <>
      <section className={styles.about}>
        <div className="image">
          <img src={elizangelaImage} alt="aaa" />
        </div>
      </section>
    </>
  );
}
