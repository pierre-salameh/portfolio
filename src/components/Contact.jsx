function Contact() {
  return (
    <section id="contact" className="bg-slate-800 text-white py-24">
      
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-6">
          Contact Me
        </h2>

        <p className="text-gray-300 mb-10">
          I'm available for freelance work and full-time opportunities.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">

        <a
         href="https://mail.google.com/mail/?view=cm&fs=1&to=pierresalam6@gmail.com"
         target="_blank"
         className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold inline-block"
        >
         Email Me
        </a>

          <a
            href="https://github.com/pierre-salameh"
            target="_blank"
            className="border border-yellow-400 px-6 py-3 rounded-lg"
          >
            Github
          </a>

          <a
            href="https://www.linkedin.com/in/pierre-salameh-898177299/"
            target="_blank"
            className="border border-yellow-400 px-6 py-3 rounded-lg"
          >
            LinkedIn
          </a>

        </div>

      </div>

    </section>
  )
}

export default Contact