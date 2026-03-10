import { useEffect, useRef } from "react";
import Lenis from "lenis";
import Header from "./components/Header";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Speakers from "./pages/Speakers";
import Team from "./pages/Team";
import Sponsors from "./pages/Sponsors";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  const lenisRef = useRef<Lenis | null>(null);
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    const handleScrollToTop = () => {
      lenis.scrollTo(0, { duration: 0.8 });
    };

    window.addEventListener("tedx:scroll-to-top", handleScrollToTop);

    return () => {
      window.removeEventListener("tedx:scroll-to-top", handleScrollToTop);
      cancelAnimationFrame(rafId);
      lenisRef.current = null;
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    lenisRef.current?.scrollTo(0, { duration: 1.1 });
  }, [location.pathname]);

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
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
