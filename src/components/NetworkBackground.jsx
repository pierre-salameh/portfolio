import { useEffect, useRef } from 'react'

const CONFIG = {
  minParticles: 35,
  maxParticles: 85,
  areaPerParticle: 13000, 
  linkDistance: 145,      
  baseSpeed: 0.35,        

  // الماوس (الكمبيوتر)
  mouseRadius: 170,
  mouseLinkAlpha: 0.55,
  mousePush: 0.04,        
  mouseGlow: 0,        

  // اللمس (الموبايل)
  touchRadius: 200,
  touchLinkAlpha: 0.9,
  touchPush: 0.07,
  touchGlow: 0.45,       
  touchDelay: 60,         
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

    const pointer = {
      x: 0,
      y: 0,
      type: 'mouse',   
      target: 0,       
      strength: 0,     
      pending: false,  
      pendingSince: 0,
    }

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

      if (
        pointer.pending &&
        performance.now() - pointer.pendingSince >= CONFIG.touchDelay
      ) {
        pointer.pending = false
        pointer.target = 1
      }

      const fade = pointer.target > pointer.strength ? 0.18 : 0.07
      pointer.strength += (pointer.target - pointer.strength) * fade
      if (pointer.target === 0 && pointer.strength < 0.005) {
        pointer.strength = 0
      }

      const isTouch = pointer.type === 'touch'
      const radius = isTouch ? CONFIG.touchRadius : CONFIG.mouseRadius
      const radiusSq = radius * radius
      const linkAlpha =
        (isTouch ? CONFIG.touchLinkAlpha : CONFIG.mouseLinkAlpha) *
        pointer.strength
      const push =
        (isTouch ? CONFIG.touchPush : CONFIG.mousePush) * pointer.strength
      const glowAlpha =
        (isTouch ? CONFIG.touchGlow : CONFIG.mouseGlow) * pointer.strength

      const linkSq = CONFIG.linkDistance * CONFIG.linkDistance
      const useMouse = pointer.strength > 0.01 && !reduceMotion

      if (useMouse && glowAlpha > 0) {
        const glow = context.createRadialGradient(
          pointer.x,
          pointer.y,
          0,
          pointer.x,
          pointer.y,
          radius
        )
        glow.addColorStop(
          0,
          `rgba(160, 205, 255, ${Math.min(glowAlpha * 1.6, 0.9)})`
        )
        glow.addColorStop(0.35, `rgba(70, 140, 255, ${glowAlpha})`)
        glow.addColorStop(1, 'rgba(70, 140, 255, 0)')
        context.fillStyle = glow
        context.fillRect(
          pointer.x - radius,
          pointer.y - radius,
          radius * 2,
          radius * 2
        )
      }

      for (let index = 0; index < particles.length; index++) {
        const particle = particles[index]

        if (!reduceMotion) {
          if (useMouse && push > 0) {
            const dx = particle.x - pointer.x
            const dy = particle.y - pointer.y
            const distSq = dx * dx + dy * dy

            if (distSq < radiusSq && distSq > 0.01) {
              const dist = Math.sqrt(distSq)
              const force = (1 - dist / radius) * push

              particle.vx += (dx / dist) * force
              particle.vy += (dy / dist) * force
            }
          }

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

        if (useMouse) {
          const dx = particle.x - pointer.x
          const dy = particle.y - pointer.y
          const distSq = dx * dx + dy * dy

          if (distSq < radiusSq) {
            const alpha = linkAlpha * (1 - Math.sqrt(distSq) / radius)

            context.beginPath()
            context.moveTo(particle.x, particle.y)
            context.lineTo(pointer.x, pointer.y)
            context.strokeStyle = `rgba(120, 180, 255, ${alpha})`
            context.lineWidth = isTouch ? 1.4 : 0.9
            context.stroke()
          }
        }

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

    const toLocal = (event) => {
      const bounds = canvas.getBoundingClientRect()
      const x = event.clientX - bounds.left
      const y = event.clientY - bounds.top

      return {
        x,
        y,
        inside: x >= 0 && x <= bounds.width && y >= 0 && y <= bounds.height,
      }
    }

    const onPointerDown = (event) => {
      if (event.pointerType !== 'touch' || !event.isPrimary) return

      const { x, y, inside } = toLocal(event)
      if (!inside) return

      pointer.type = 'touch'
      pointer.x = x
      pointer.y = y
      pointer.pending = true
      pointer.pendingSince = performance.now()
    }

    const onPointerMove = (event) => {
      if (!event.isPrimary) return

      const { x, y, inside } = toLocal(event)

      if (event.pointerType === 'touch') {
        if (!pointer.pending && pointer.target === 0) return

        pointer.x = x
        pointer.y = y

        if (!inside) {
          pointer.pending = false
          pointer.target = 0
        }
        return
      }

      pointer.type = 'mouse'
      pointer.x = x
      pointer.y = y
      pointer.target = inside ? 1 : 0
    }

    const onPointerUp = (event) => {
      if (event.pointerType !== 'touch') return

      if (pointer.pending) {
        pointer.strength = Math.max(pointer.strength, 0.7)
      }

      pointer.pending = false
      pointer.target = 0
    }

    const onPointerCancel = (event) => {
      if (event.pointerType !== 'touch') return

      pointer.pending = false
      pointer.target = 0
    }

    const onMouseLeave = () => {
      if (pointer.type === 'mouse') pointer.target = 0
    }

    const onVisibilityChange = () => {
      if (document.hidden) stop()
      else start()
    }

    resizeCanvas()
    start()

    window.addEventListener('pointerdown', onPointerDown, { passive: true })
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    window.addEventListener('pointerup', onPointerUp, { passive: true })
    window.addEventListener('pointercancel', onPointerCancel, {
      passive: true,
    })
    document.addEventListener('mouseleave', onMouseLeave)
    document.addEventListener('visibilitychange', onVisibilityChange)

    let resizeObserver = null
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(resizeCanvas)
      resizeObserver.observe(canvas)
    } else {
      window.addEventListener('resize', resizeCanvas)
    }

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
      window.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', onPointerUp)
      window.removeEventListener('pointercancel', onPointerCancel)
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