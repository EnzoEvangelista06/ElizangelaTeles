import "./styles/theme.css";
import "./styles/global.css";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { Home } from "./Home";

export function App() {
  return (
    <>
      <Container>
        <Header />
      </Container>

      <Container>
        <Home />
      </Container>
    </>
  );
}
