import { useEffect, useState } from "react"

function ScrollTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShow(window.scrollY > 300)
    })
  }, [])

  return (
    show && (
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-yellow-400 text-black px-4 py-2 rounded-full"
      >
        ↑
      </button>
    )
  )
}

export default ScrollTop