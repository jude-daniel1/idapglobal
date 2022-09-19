import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Hero } from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="max-w-6xl mx-auto min-h-screen">
        <Hero />
        <About />
        <Services />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
