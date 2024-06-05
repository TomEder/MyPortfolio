import "./App.css";
import Header from "./conponents/Header/header";
import Container from "./conponents/Container/container";
import Projects from "./conponents/Projects/projects";
import Footer from "./conponents/Footer/footer";
import Skills from "./conponents/Skills/skills";
import Divider  from "./conponents/Divider/Divider";
import Services from "./conponents/Services/Services";

import JsImg from "./Images/javascript-736400_640.png";
import ReactImg from "./Images/ReactImg.png";
import AngularImg from "./Images/AngularImg.png";
import VueImg from "./Images/VueImg.png";
import Landing from "./conponents/Landing/Landing";
import Testimonials from "./conponents/Testimonials/Testimonials";
import Contact from "./conponents/Contact/Contact";

export default function App() {
  return (
    <div className="w-screen overflow-hidden">
      <Header />
      <Landing />
      <Container />
      <Projects />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
