import Navbar from "./components/Navbar"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ScrollTop from "./components/ScrollTop"
import { TypeAnimation } from 'react-type-animation'
import Profile from "./components/Profile"
import TechStack from "./components/TechStack"
import Experience from "./components/Experience"
import GithubStats from "./components/GithubStats"

function App() {
  return (
    <>
      <Navbar />



<section 
id="home" 
className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen flex items-center justify-center overflow-hidden"
>

{/* background glow */}
<div className="absolute w-96 h-96 bg-yellow-400/20 blur-3xl rounded-full top-20 left-20"></div>
<div className="absolute w-96 h-96 bg-blue-500/20 blur-3xl rounded-full bottom-20 right-20"></div>

<div className="text-center relative z-10">
  <h1 className="text-5xl font-bold mb-4">
    PIERRE SALAMEH
  </h1>

  <p className="text-xl text-gray-300 mb-6">
    Full Stack Web Developer | React & Laravel
  </p>

  <div className="space-x-4">
    <button 
      onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
      className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold"
    >
      View Projects
    </button>

    <a 
      href="/cv.pdf"
      download
      className="border border-yellow-400 px-6 py-3 rounded-lg inline-block hover:bg-yellow-400 hover:text-black transition"
    >
      Download CV
    </a>
  </div>

  <br />

  <TypeAnimation
    sequence={[
      'Full Stack Developer',
      2000,
      'React Developer',
      2000,
      'Laravel Developer',
      2000,
    ]}
    wrapper="span"
    speed={50}
    className="text-xl text-gray-300"
    repeat={Infinity}
  />

</div>

</section>

   
      
      <About />
      <Profile />
      <TechStack />
      <Experience />
      <Projects />
      
      <Contact />
      <ScrollTop />
      <Footer />

    </>
  )
}

export default App