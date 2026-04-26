import { 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaLaravel, 
  FaNodeJs, 
  FaGitAlt 
} from "react-icons/fa"

import { SiMysql, SiMongodb, SiPhp } from "react-icons/si"

function TechStack() {
  return (
    <section className="bg-slate-800 text-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-16">
          Tech Stack
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div className="p-6 bg-slate-900 rounded-xl hover:scale-110 transition">
            <FaReact className="text-5xl text-cyan-400 mx-auto mb-3"/>
            <p>React</p>
          </div>

          <div className="p-6 bg-slate-900 rounded-xl hover:scale-110 transition">
            <FaLaravel className="text-5xl text-red-500 mx-auto mb-3"/>
            <p>Laravel</p>
          </div>

          <div className="p-6 bg-slate-900 rounded-xl hover:scale-110 transition">
            <FaJs className="text-5xl text-yellow-400 mx-auto mb-3"/>
            <p>JavaScript</p>
          </div>

          <div className="p-6 bg-slate-900 rounded-xl hover:scale-110 transition">
            <FaNodeJs className="text-5xl text-green-500 mx-auto mb-3"/>
            <p>Node.js</p>
          </div>

          <div className="p-6 bg-slate-900 rounded-xl hover:scale-110 transition">
            <FaHtml5 className="text-5xl text-orange-500 mx-auto mb-3"/>
            <p>HTML</p>
          </div>

          <div className="p-6 bg-slate-900 rounded-xl hover:scale-110 transition">
            <FaCss3Alt className="text-5xl text-blue-500 mx-auto mb-3"/>
            <p>CSS</p>
          </div>

          <div className="p-6 bg-slate-900 rounded-xl hover:scale-110 transition">
            <SiMysql className="text-5xl text-blue-400 mx-auto mb-3"/>
            <p>MySQL</p>
          </div>

          <div className="p-6 bg-slate-900 rounded-xl hover:scale-110 transition">
            <FaGitAlt className="text-5xl text-orange-400 mx-auto mb-3"/>
            <p>Git</p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default TechStack