import "./App.css";
import Home from "./components/Hero/Home";
import { Manifesto } from "./components/Manifesto/Manifesto";
import { RecentWork } from "./components/RecentWork/RecentWork";

export function App() {
  return (
    <div className="App">
      <Home />
      <Manifesto />
      <RecentWork />
      <div className="noise"></div>
      <div className="container"></div>
    </div>
  );
}
