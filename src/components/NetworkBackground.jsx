
import { useEffect, useRef } from 'react'

function NetworkBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')

    if (!canvas || !context) return

    let animationFrame
    let width = 0
    let height = 0
    let particles = []

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    const resizeCanvas = () => {
      const bounds = canvas.getBoundingClientRect()
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5)

      width = bounds.width
      height = bounds.height

      canvas.width = width * ratio
      canvas.height = height * ratio

      context.setTransform(ratio, 0, 0, ratio, 0, 0)

      const count = Math.min(
        85,
        Math.max(35, Math.floor((width * height) / 13000))
      )

      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.6 + 0.5,
      }))
    }

    const animate = () => {
      context.clearRect(0, 0, width, height)

      particles.forEach((particle, index) => {
        if (!reduceMotion) {
          particle.x += particle.vx
          particle.y += particle.vy

          if (particle.x < 0 || particle.x > width) {
            particle.vx *= -1
          }

          if (particle.y < 0 || particle.y > height) {
            particle.vy *= -1
          }
        }

        context.beginPath()
        context.arc(
          particle.x,
          particle.y,
          particle.radius,
          0,
          Math.PI * 2
        )

        context.fillStyle = 'rgba(90, 160, 255, 0.85)'
        context.fill()

        for (let i = index + 1; i < particles.length; i++) {
          const other = particles[i]

          const dx = particle.x - other.x
          const dy = particle.y - other.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 145) {
            context.beginPath()
            context.moveTo(particle.x, particle.y)
            context.lineTo(other.x, other.y)

            context.strokeStyle = `rgba(53, 125, 220, ${
              0.2 * (1 - distance / 145)
            })`

            context.lineWidth = 0.7
            context.stroke()
          }
        }
      })

      if (!reduceMotion) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    resizeCanvas()
    animate()

    window.addEventListener('resize', resizeCanvas)

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="network-canvas"
      aria-hidden="true"
    />
  )
}

export default NetworkBackground
