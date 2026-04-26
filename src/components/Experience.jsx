function Experience() {
  return (
    <section className="bg-slate-900 text-white py-24">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-16">
          Experience
        </h2>

        <div className="space-y-10 border-l-2 border-yellow-400 pl-8">

          {/* React Instructor */}
          <div>
            <h3 className="text-2xl font-semibold">
              React.js Instructor
            </h3>

            <p className="text-yellow-400">
              Al-Rukn Training Center • 2026 - Present
            </p>

            <ul className="text-gray-400 mt-3 space-y-1">
              <li>• Trained 6+ students in React.js fundamentals and advanced concepts</li>
              <li>• Supervised development of 4 real-world full-stack applications</li>
              <li>• Improved student project completion rate by 80%</li>
            </ul>
          </div>


          {/* GAO Tek */}
          <div>
            <h3 className="text-2xl font-semibold">
              Web Content Uploading Intern
            </h3>

            <p className="text-yellow-400">
              GAO Tek • 2025
            </p>

            <ul className="text-gray-400 mt-3 space-y-1">
              <li>• Published and managed 50+ website pages using WordPress</li>
              <li>• Improved page responsiveness across devices by 40%</li>
              <li>• Optimized images and layout reducing load time by 30%</li>
            </ul>
          </div>


          {/* Software Engineer */}
          <div>
            <h3 className="text-2xl font-semibold">
              Software Engineer
            </h3>

            <p className="text-yellow-400">
              KCPC Group • 2024 - 2025
            </p>

            <ul className="text-gray-400 mt-3 space-y-1">
              <li>• Designed and optimized 10+ MySQL database tables</li>
              <li>• Reduced query response time by 35%</li>
              <li>• Taught algorithms improving problem-solving performance by 50%</li>
            </ul>
          </div>


          {/* Frontend Trainee */}
          <div>
            <h3 className="text-2xl font-semibold">
              Frontend Developer Trainee
            </h3>

            <p className="text-yellow-400">
              Darrebni Organization • 2024
            </p>

            <ul className="text-gray-400 mt-3 space-y-1">
              <li>• Built 5+ responsive web pages using HTML, CSS, JavaScript</li>
              <li>• Improved UI consistency and reusability by 40%</li>
              <li>• Enhanced user interaction and layout performance</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Experience