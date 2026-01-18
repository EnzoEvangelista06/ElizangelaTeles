import style from "./header.module.css";

import { IoClose, IoMenu } from "react-icons/io5";
import { Logo } from "../Logo";
import { NavItem } from "../NavItem";

export function Header() {
  return (
    <>
      <header className={style["flex-container"]}>
        <Logo />

        <nav className={style["flex-container"]}>
          <ul className={style["flex-container"]}>
            <NavItem url="home">Home</NavItem>
            <NavItem url="about">Minha História</NavItem>
            <NavItem url="specialties">Especialidades</NavItem>
            <NavItem url="therapy">Terapia Online</NavItem>
            <NavItem url="testimonials">Depoimentos</NavItem>
            <NavItem url="asked">Perguntas Frequentes</NavItem>
          </ul>
        </nav>

        <div className={style.contact}>
          <a href="#contact" className="btn">
            Agendar
          </a>
        </div>

        <div className={style.toggle}>
          <button>
            <IoClose size={40} />
          </button>

          <button>
            <IoMenu size={40} />
          </button>
        </div>
      </header>
    </>
  );
}
