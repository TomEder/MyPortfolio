import "./App.css";
import Header from "./conponents/Header/header";
import Container from "./conponents/Container/container";
import Projects from "./conponents/Projects/projects";
import Footer from "./conponents/Footer/footer";
import Skills from "./conponents/Skills/skills";
import Timeline from "./conponents/Timeline/timeline";

export default function App() {
  return (
    <div className="w-screen">
      <Header />
      <Container />
      <Projects />
      <Timeline />
      <Skills />
      <Footer />
    </div>
  );
}
