import { HashRouter, BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer } from './components/layout/Footer'
import { Nav } from './components/layout/Nav'
import { PageBackdrop } from './components/layout/PageBackdrop'
import { About } from './components/sections/About'
import { Contact } from './components/sections/Contact'
import { Experience } from './components/sections/Experience'
import { Hero } from './components/sections/Hero'
import { OpenSource } from './components/sections/OpenSource'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'

function HomePage() {
  return (
    <main className="relative z-[2]">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <OpenSource />
      <Contact />
    </main>
  )
}

export default function App() {
  return (
    <HashRouter>
      <PageBackdrop />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}
