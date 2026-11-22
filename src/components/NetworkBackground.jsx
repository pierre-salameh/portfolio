import { useEffect, useRef } from 'react'

// ───── إعدادات سهلة التعديل ─────
const CONFIG = {
  minParticles: 35,
  maxParticles: 85,
  areaPerParticle: 13000, // مساحة الشاشة لكل نقطة
  linkDistance: 145,      // أقصى مسافة لرسم خط بين نقطتين
  baseSpeed: 0.35,        // سرعة النقاط الهادئة
  mouseRadius: 170,       // نصف قطر تأثير الماوس
  mouseLinkAlpha: 0.55,   // سطوع الخطوط بين الماوس والنقاط
  mousePush: 0.04,        // دفع النقاط بعيداً عن الماوس (0 = بدون دفع)
  mouseGlow: 0.1,         // سطوع الهالة حول الماوس (0 = بدون هالة)
}

function NetworkBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')

    if (!canvas || !context) return

    let animationFrame = 0
    let width = 0
    let height = 0
    let particles = []
    let running = false
    let inView = true

    const mouse = { x: 0, y: 0, active: false }

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    const createParticles = () => {
      const count = Math.min(
        CONFIG.maxParticles,
        Math.max(
          CONFIG.minParticles,
          Math.floor((width * height) / CONFIG.areaPerParticle)
        )
      )

      particles = Array.from({ length: count }, () => {
        const bvx = (Math.random() - 0.5) * CONFIG.baseSpeed
        const bvy = (Math.random() - 0.5) * CONFIG.baseSpeed

        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: bvx,
          vy: bvy,
          bvx,
          bvy,
          radius: Math.random() * 1.6 + 0.5,
        }
      })
    }

    const draw = () => {
      context.clearRect(0, 0, width, height)

      const linkSq = CONFIG.linkDistance * CONFIG.linkDistance
      const mouseSq = CONFIG.mouseRadius * CONFIG.mouseRadius
      const useMouse = mouse.active && !reduceMotion

      // هالة خفيفة حول المؤشر
      if (useMouse && CONFIG.mouseGlow > 0) {
        const glow = context.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          CONFIG.mouseRadius
        )
        glow.addColorStop(0, `rgba(70, 140, 255, ${CONFIG.mouseGlow})`)
        glow.addColorStop(1, 'rgba(70, 140, 255, 0)')
        context.fillStyle = glow
        context.fillRect(0, 0, width, height)
      }

      for (let index = 0; index < particles.length; index++) {
        const particle = particles[index]

        if (!reduceMotion) {
          // دفع خفيف بعيداً عن الماوس
          if (useMouse && CONFIG.mousePush > 0) {
            const dx = particle.x - mouse.x
            const dy = particle.y - mouse.y
            const distSq = dx * dx + dy * dy

            if (distSq < mouseSq && distSq > 0.01) {
              const dist = Math.sqrt(distSq)
              const force =
                (1 - dist / CONFIG.mouseRadius) * CONFIG.mousePush

              particle.vx += (dx / dist) * force
              particle.vy += (dy / dist) * force
            }
          }

          // عودة تدريجية إلى السرعة الهادئة
          particle.vx += (particle.bvx - particle.vx) * 0.02
          particle.vy += (particle.bvy - particle.vy) * 0.02

          particle.x += particle.vx
          particle.y += particle.vy

          if (particle.x < 0) {
            particle.x = 0
            particle.vx = Math.abs(particle.vx)
            particle.bvx = Math.abs(particle.bvx)
          } else if (particle.x > width) {
            particle.x = width
            particle.vx = -Math.abs(particle.vx)
            particle.bvx = -Math.abs(particle.bvx)
          }

          if (particle.y < 0) {
            particle.y = 0
            particle.vy = Math.abs(particle.vy)
            particle.bvy = Math.abs(particle.bvy)
          } else if (particle.y > height) {
            particle.y = height
            particle.vy = -Math.abs(particle.vy)
            particle.bvy = -Math.abs(particle.bvy)
          }
        }

        // النقطة
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

        // خط بين النقطة والماوس
        if (useMouse) {
          const dx = particle.x - mouse.x
          const dy = particle.y - mouse.y
          const distSq = dx * dx + dy * dy

          if (distSq < mouseSq) {
            const alpha =
              CONFIG.mouseLinkAlpha *
              (1 - Math.sqrt(distSq) / CONFIG.mouseRadius)

            context.beginPath()
            context.moveTo(particle.x, particle.y)
            context.lineTo(mouse.x, mouse.y)
            context.strokeStyle = `rgba(120, 180, 255, ${alpha})`
            context.lineWidth = 0.9
            context.stroke()
          }
        }

        // خطوط بين النقاط
        for (let i = index + 1; i < particles.length; i++) {
          const other = particles[i]

          const dx = particle.x - other.x
          const dy = particle.y - other.y
          const distSq = dx * dx + dy * dy

          if (distSq < linkSq) {
            const distance = Math.sqrt(distSq)

            context.beginPath()
            context.moveTo(particle.x, particle.y)
            context.lineTo(other.x, other.y)
            context.strokeStyle = `rgba(53, 125, 220, ${
              0.2 * (1 - distance / CONFIG.linkDistance)
            })`
            context.lineWidth = 0.7
            context.stroke()
          }
        }
      }
    }

    const resizeCanvas = () => {
      const bounds = canvas.getBoundingClientRect()
      if (!bounds.width || !bounds.height) return

      const ratio = Math.min(window.devicePixelRatio || 1, 1.5)
      const previousWidth = width
      const previousHeight = height

      width = bounds.width
      height = bounds.height

      canvas.width = Math.round(width * ratio)
      canvas.height = Math.round(height * ratio)
      context.setTransform(ratio, 0, 0, ratio, 0, 0)

      // على الموبايل يتغير الارتفاع فقط عند إخفاء شريط المتصفح:
      // لا نعيد بناء النقاط حينها، فقط نمدّدها
      const widthChanged = Math.abs(width - previousWidth) > 1

      if (widthChanged || particles.length === 0) {
        createParticles()
      } else if (previousHeight > 0) {
        const scale = height / previousHeight
        particles.forEach((particle) => {
          particle.y *= scale
        })
      }

      draw()
    }

    const loop = () => {
      draw()
      animationFrame = requestAnimationFrame(loop)
    }

    const start = () => {
      if (reduceMotion || running || !inView || document.hidden) return
      running = true
      animationFrame = requestAnimationFrame(loop)
    }

    const stop = () => {
      running = false
      cancelAnimationFrame(animationFrame)
    }

    const onPointerMove = (event) => {
      if (event.pointerType === 'touch') return

      const bounds = canvas.getBoundingClientRect()
      const x = event.clientX - bounds.left
      const y = event.clientY - bounds.top

      mouse.x = x
      mouse.y = y
      mouse.active = x >= 0 && x <= bounds.width && y >= 0 && y <= bounds.height
    }

    const onMouseLeave = () => {
      mouse.active = false
    }

    const onVisibilityChange = () => {
      if (document.hidden) stop()
      else start()
    }

    resizeCanvas()
    start()

    // نستمع على window لأن الكانفاس غالباً خلف المحتوى ولا يستقبل الماوس
    window.addEventListener('pointermove', onPointerMove)
    document.addEventListener('mouseleave', onMouseLeave)
    document.addEventListener('visibilitychange', onVisibilityChange)

    let resizeObserver = null
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(resizeCanvas)
      resizeObserver.observe(canvas)
    } else {
      window.addEventListener('resize', resizeCanvas)
    }

    // توقف الرسم عندما يخرج الـ Hero من الشاشة
    let intersectionObserver = null
    if (typeof IntersectionObserver !== 'undefined') {
      intersectionObserver = new IntersectionObserver(([entry]) => {
        inView = entry.isIntersecting
        if (inView) start()
        else stop()
      })
      intersectionObserver.observe(canvas)
    }

    return () => {
      stop()
      window.removeEventListener('pointermove', onPointerMove)
      document.removeEventListener('mouseleave', onMouseLeave)
      document.removeEventListener('visibilitychange', onVisibilityChange)
      window.removeEventListener('resize', resizeCanvas)
      resizeObserver?.disconnect()
      intersectionObserver?.disconnect()
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