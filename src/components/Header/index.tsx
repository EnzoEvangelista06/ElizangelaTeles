import { IoClose, IoMenu } from "react-icons/io5";
import { Logo } from "../Logo";

export function Header() {
  return (
    <>
      <header className="">
        <Logo />

        <nav>
          <ul>
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

          <a href="#contact" className="btn">
            Agendar
          </a>
        </nav>

        <div className="toggle">
          <button>
            <IoClose />
          </button>

          <button>
            <IoMenu />
          </button>
        </div>
      </header>
    </>
  );
}
