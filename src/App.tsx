import "./App.css";
import { About } from "./components/About/About";
import Home from "./components/Hero/Home";
import { Manifesto } from "./components/Manifesto/Manifesto";
import { RecentWork } from "./components/RecentWork/RecentWork";
import { Testimonials } from "./components/Testimonials/Testimonials";

export function App() {
  return (
    <div className="App">
      <Home />
      <Manifesto />
      <RecentWork />
      <About />
      <Testimonials />
      <div className="noise"></div>
    </div>
  );
}
