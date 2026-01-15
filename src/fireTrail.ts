/**
 * Fire Trail Effect
 * Creates animated particles that follow the mouse cursor
 */

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  size: number
  r: number
  g: number
  b: number
}

let fireTrailEnabled = false
let fireTrailColor = { r: 255, g: 102, b: 0 } // Default orange
let fireTrailSize = 1 // Size multiplier (0.5 to 2)

export function setFireTrailEnabled(enabled: boolean) {
  fireTrailEnabled = enabled
  const canvas = document.getElementById('fire-trail')
  if (canvas) {
    canvas.style.opacity = enabled ? '1' : '0'
  }
}

export function setFireTrailColor(hex: string) {
  fireTrailColor = {
    r: parseInt(hex.slice(1, 3), 16),
    g: parseInt(hex.slice(3, 5), 16),
    b: parseInt(hex.slice(5, 7), 16)
  }
}

export function setFireTrailSize(size: number) {
  fireTrailSize = size
}

export function isFireTrailEnabled() {
  return fireTrailEnabled
}

export function initFireTrail() {
  // Create canvas
  const canvas = document.createElement('canvas')
  canvas.id = 'fire-trail'
  canvas.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
    transition: opacity 0.3s ease;
    opacity: 0;
  `
  document.body.insertBefore(canvas, document.body.firstChild)

  const ctx = canvas.getContext('2d')!
  const particles: Particle[] = []
  let mouseX = 0
  let mouseY = 0
  let isMoving = false
  let moveTimeout: number

  // Resize canvas
  function resize() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }
  resize()
  window.addEventListener('resize', resize)

  // Track mouse
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
    isMoving = true
    
    clearTimeout(moveTimeout)
    moveTimeout = window.setTimeout(() => {
      isMoving = false
    }, 100)
  })

  // Create particle
  function createParticle() {
    const angle = Math.random() * Math.PI - Math.PI / 2 // Spread downward (90-270 degrees)
    const speed = Math.random() * 1.5 + 0.5
    const baseSize = (Math.random() * 4 + 3) * fireTrailSize // Apply size multiplier
    
    particles.push({
      x: mouseX + (Math.random() - 0.5) * 6 * fireTrailSize, // Slight horizontal spread
      y: mouseY + 8, // Start below cursor
      vx: Math.cos(angle) * speed * 0.3,
      vy: Math.abs(Math.sin(angle)) * speed + 0.5, // Fall downward
      life: 1,
      maxLife: 1,
      size: baseSize,
      r: fireTrailColor.r,
      g: fireTrailColor.g,
      b: fireTrailColor.b,
    })
  }

  // Animation loop
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Add new particles when mouse moves
    if (isMoving) {
      for (let i = 0; i < 2; i++) {
        createParticle()
      }
    }

    // Update and draw particles
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i]
      
      // Update
      p.x += p.vx
      p.y += p.vy
      p.vy += 0.08 // Gravity pulls particles down
      p.life -= 0.03 // Fade faster
      
      // Remove dead particles
      if (p.life <= 0) {
        particles.splice(i, 1)
        continue
      }

      // Draw
      const alpha = p.life * 0.8
      const size = p.size * p.life
      
      // Gradient from center using RGB
      const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size)
      gradient.addColorStop(0, `rgba(${p.r}, ${p.g}, ${p.b}, ${alpha})`)
      gradient.addColorStop(0.4, `rgba(${Math.floor(p.r * 0.8)}, ${Math.floor(p.g * 0.7)}, ${Math.floor(p.b * 0.6)}, ${alpha * 0.6})`)
      gradient.addColorStop(1, `rgba(${Math.floor(p.r * 0.5)}, ${Math.floor(p.g * 0.4)}, ${Math.floor(p.b * 0.3)}, 0)`)
      
      ctx.beginPath()
      ctx.arc(p.x, p.y, size, 0, Math.PI * 2)
      ctx.fillStyle = gradient
      ctx.fill()
    }

    requestAnimationFrame(animate)
  }

  animate()

  // Return cleanup function
  return () => {
    canvas.remove()
    window.removeEventListener('resize', resize)
  }
}
