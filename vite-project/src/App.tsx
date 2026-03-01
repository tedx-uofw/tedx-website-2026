import { useEffect } from "react";
import Lenis from "lenis";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Speakers from "./pages/Speakers";
import Team from "./pages/Team";
import Sponsors from "./pages/Sponsors";
import About from "./pages/About";
import Footer from "./components/Footer";
import Team2 from "./pages/Team2.tsx"

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/team" element={<Team />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/about" element={<About />} />
          <Route path="/team2" element={<Team2 />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
