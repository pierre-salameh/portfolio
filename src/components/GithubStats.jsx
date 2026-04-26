function GithubStats() {
  return (
    <section className="bg-slate-800 text-white py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-12">
          GitHub Stats
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-8">

          <img
            src="https://github-readme-stats.vercel.app/api?username=pierre-salameh&show_icons=true&theme=tokyonight"
            className="rounded-xl"
          />

          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=pierre-salameh&layout=compact&theme=tokyonight"
            className="rounded-xl"
          />
          

        </div>
<img
  src="https://streak-stats.demolab.com?user=pierre-salameh&theme=tokyonight"
  className="rounded-xl mx-auto mt-8"
/>
      </div>
    </section>
  )
}

export default GithubStats