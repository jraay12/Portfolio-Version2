import "./App.css";
import Header from "./layout/Header";
import Home from "./layout/Home";
import About from "./layout/About";
import Experience from "./layout/Experience";
import Project from "./layout/Project";
import Contact from "./layout/Contact";
function App() {
  return (
    <div className="flex flex-col min-h-screen bg-primary overflow-x-hidden">
      <Header />
      <Home />
      <Experience />
      <Project />
      <About />
      <Contact />
    </div>
  );
}

export default App;
