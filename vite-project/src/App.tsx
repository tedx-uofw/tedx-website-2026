import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Speakers from './pages/Speakers'
import Team from './pages/Team'
import Sponsors from './pages/Sponsors'
import About from './pages/About'

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Header />
      <main className="px-4 py-8 md:px-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/team" element={<Team />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  )
}

export default App