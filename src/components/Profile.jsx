function Profile() {
  return (
    <section className="bg-slate-900 text-white py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <div className="flex justify-center">
    <img
  src="/pierre.jpg"
  className="w-48 md:w-64 h-auto rounded-2xl border-4 border-yellow-400"
/>
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-6">
            Who Am I
          </h2>

          <p className="text-gray-300 text-lg mb-4">
            I'm Pierre Salameh, Full Stack Web Developer specialized in React.js and Laravel.
            I build scalable web applications and modern user interfaces.
          </p>

          <p className="text-gray-300 text-lg">
            I also work as React Instructor and mentor developers in building real-world projects.
          </p>

        </div>

      </div>
    </section>
  )
}

export default Profile