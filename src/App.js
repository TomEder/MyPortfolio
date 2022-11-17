import "./App.css";
import Header from "./conponents/Header/header";
import Container from "./conponents/Container/container";
import Projects from "./conponents/Projects/projects";
import Footer from "./conponents/Footer/footer";

export default function App() {
  return (
    <div className="w-screen">
      <Header />
      <Container />
      <Projects />
      <Footer />
    </div>
  );
}
