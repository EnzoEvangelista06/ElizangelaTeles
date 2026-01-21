import "./styles/theme.css";
import "./styles/global.css";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { Hero } from "./sections/Home";
import { About } from "./sections/About";
import { ContainerBackground } from "./components/ContainerBackground";

export function App() {
  return (
    <>
      <Container>
        <Header />
      </Container>

      <Container>
        <Hero />
      </Container>

      <ContainerBackground>
        <About />
      </ContainerBackground>
    </>
  );
}
