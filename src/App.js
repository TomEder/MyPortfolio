import "./App.css";
import Header from "./conponents/Header/header";
import Container from "./conponents/Container/container";

export default function App() {
  return (
    <>
      <Header />
      <div className="grid grid-cols-1 bg-slate-500 place-content-center">
        <Container />
      </div>
    </>
  );
}
