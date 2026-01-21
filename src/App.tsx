import "./styles/theme.css";
import "./styles/global.css";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { Hero } from "./sections/Home";

export function App() {
  return (
    <>
      <Container>
        <Header />
      </Container>

      <Container>
        <Hero />
      </Container>
    </>
  );
}
