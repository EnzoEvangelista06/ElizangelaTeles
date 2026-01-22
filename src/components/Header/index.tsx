import styles from "./header.module.css";

import { IoClose, IoMenu } from "react-icons/io5";
import { Logo } from "../Logo";
import { NavItem } from "../NavItem";
import { Button } from "../Button";

export function Header() {
  return (
    <>
      <header>
        <div className={`${styles.container} ${styles["flex-container"]}`}>
          <Logo />

          <nav className={styles["flex-container"]}>
            <ul className={styles["flex-container"]}>
              <NavItem url="home">Home</NavItem>
              <NavItem url="about">Minha História</NavItem>
              <NavItem url="specialties">Especialidades</NavItem>
              <NavItem url="therapy">Terapia Online</NavItem>
              <NavItem url="testimonials">Depoimentos</NavItem>
              <NavItem url="asked">Perguntas Frequentes</NavItem>
            </ul>
          </nav>

          <div className={styles.contact}>
            <Button small url="contact">
              Agendar
            </Button>
          </div>

          <div className={styles.toggle}>
            <button>
              <IoClose size={40} />
            </button>

            <button>
              <IoMenu size={40} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
