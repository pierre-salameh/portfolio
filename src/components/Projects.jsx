function Projects() {
  return (
    <section id="projects" className="bg-slate-900 text-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-16">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Project 1 */}
          <div className="group relative overflow-hidden rounded-xl">
            
            <img
              src="/20.png"
              className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-center p-4">
              
              <h3 className="text-2xl font-bold mb-2">
                Technology Cafe
              </h3>

              <p className="text-gray-300 mb-4">
                React + Laravel cafe management system
              </p>

              <div className="flex gap-3">
        
             <a
             href="https://github.com/pierre-salameh/Technology-Cafee"
             target="_blank"
             className="bg-yellow-400 text-black px-4 py-2 rounded"
             >
              Github
             </a>
              </div>

            </div>

          </div>


          {/* Project 2 */}
          <div className="group relative overflow-hidden rounded-xl">
            
            <img
              src="/21.png"
              className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-center p-4">
              
              <h3 className="text-2xl font-bold mb-2">
                Restaurant Automation
              </h3>

              <p className="text-gray-300 mb-4">
                Node.js restaurant automation system
              </p>

              <div className="flex gap-3">
              
             <a
             href="https://github.com/pierre-salameh/Resturant"
             target="_blank"
             className="bg-yellow-400 text-black px-4 py-2 rounded"
             >
              Github
             </a>
            
              </div>

            </div>

          </div>


          {/* Project 3 */}
          <div className="group relative overflow-hidden rounded-xl">
            
            <img
              src="/22.png"
              className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-center p-4">
              
              <h3 className="text-2xl font-bold mb-2">
                Scheduling Simulator
              </h3>

              <p className="text-gray-300 mb-4">
                OS scheduling algorithms simulator
              </p>

              <div className="flex gap-3">

                  <a
             href="https://github.com/pierre-salameh/Pierre_Alogrithms"
             target="_blank"
             className="bg-yellow-400 text-black px-4 py-2 rounded"
             >
              Github
             </a>
                
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Projects