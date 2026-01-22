import "./styles/theme.css";
import "./styles/global.css";
import { Header } from "./components/Header";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";

export function App() {
  return (
    <>
      <main>
        <section className="hero">
          <Header />
          <Hero />
        </section>

        <About />
      </main>
    </>
  );
}
