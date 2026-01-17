import style from "./header.module.css";

import { IoClose, IoMenu } from "react-icons/io5";
import { Logo } from "../Logo";

export function Header() {
  return (
    <>
      <header className={style["flex-container"]}>
        <Logo />

        <nav className={style["flex-container"]}>
          <ul className={style["flex-container"]}>
            <li>
              <a href="#home">Home</a>
            </li>

            <li>
              <a href="#about">Minha História</a>
            </li>

            <li>
              <a href="#specialties">Especialidades</a>
            </li>

            <li>
              <a href="#therapy">Terapia Online</a>
            </li>

            <li>
              <a href="#testimonials">Depoimentos</a>
            </li>

            <li>
              <a href="#asked">Perguntas Frequentes</a>
            </li>
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
