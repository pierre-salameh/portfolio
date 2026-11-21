
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Profile from './components/Profile'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ScrollTop from './components/ScrollTop'
import TechnicalSkills from "./components/TechnicalSkills";
import Courses from "./components/Courses";
import Languages from "./components/Languages";

import './App.css'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Home />
        <Projects />
        <Experience />
        <About />
        <Profile />
        <TechnicalSkills />
        <Courses />
        <Languages />
        <Contact />
      </main>

      <ScrollTop />
    </>
  )
}

export default App
