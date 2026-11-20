
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Profile from './components/Profile'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollTop from './components/ScrollTop'
import TechnicalSkills from "./components/TechnicalSkills";

import './App.css'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Home />
        <About />
        <Profile />
        <Projects />
        <Experience />
        <TechnicalSkills />
        <Contact />
      </main>

      <ScrollTop />
    </>
  )
}

export default App
