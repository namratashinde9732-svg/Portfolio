import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">

      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <main className="pt-20 space-y-10">

        <Home />

        <About />

        <Skills />

        <Projects />

        <Experience />

        <Contact />

      </main>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-gray-700 text-gray-400">
        © 2026 Namrata Shinde | All Rights Reserved
      </footer>

    </div>
  );
}