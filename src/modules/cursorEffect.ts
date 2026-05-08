export function initCursorEffect(): void {
  if (window.matchMedia('(pointer: coarse)').matches) return

  const canvas = document.createElement('canvas')
  canvas.style.cssText = `
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    opacity: 1;
  `
  document.body.prepend(canvas)

  const ctx = canvas.getContext('2d')!
  let mouseX = window.innerWidth / 2
  let mouseY = window.innerHeight / 2
  let lerpX = mouseX
  let lerpY = mouseY
  const LERP = 0.072
  const RADIUS = 420

  function resize() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }
  resize()
  window.addEventListener('resize', resize, { passive: true })

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
  }, { passive: true })

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    lerpX += (mouseX - lerpX) * LERP
    lerpY += (mouseY - lerpY) * LERP

    const grad = ctx.createRadialGradient(lerpX, lerpY, 0, lerpX, lerpY, RADIUS)
    grad.addColorStop(0,   'rgba(99, 102, 241, 0.065)')
    grad.addColorStop(0.3, 'rgba(79,  70, 229, 0.038)')
    grad.addColorStop(0.7, 'rgba(59,  51, 180, 0.015)')
    grad.addColorStop(1,   'rgba(0,   0,   0,  0)')

    ctx.fillStyle = grad
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    requestAnimationFrame(draw)
  }
  draw()
}
