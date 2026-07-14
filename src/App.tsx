import "./App.css";
import Home from "./components/Hero/Home";
import { Manifesto } from "./components/Manifesto/Manifesto";

export function App() {
  return (
    <div className="App">
      <Home />
      <Manifesto />
      <div className="noise"></div>
      <div className="container"></div>
    </div>
  );
}
