import "./App.css";
import Header from "./conponents/Header/header";
import Container from "./conponents/Container/container";
import Projects from "./conponents/Projects/projects";
import Footer from "./conponents/Footer/footer";
import Services from "./conponents/Services/Services";
import Landing from "./conponents/Landing/Landing";
import Testimonials from "./conponents/Testimonials/Testimonials";
import Contact from "./conponents/Contact/Contact";

export default function App() {
  return (
    <div className="w-screen overflow-hidden">
      <Header />
      <div id="landing">
        <Landing />
      </div>
      <div id="container">
        <Container />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
