const carouselIntervals = new Map<string, number>()

export function showImage(media: Element, index: number) {
  media.querySelectorAll('img').forEach((img, i) => img.classList.toggle('active', i === index))
  media.querySelectorAll('.dot').forEach((dot, i) => dot.classList.toggle('active', i === index))
}

function startCarousel(media: Element, projectId: string) {
  const images = media.querySelectorAll('img')
  if (images.length <= 1) return

  let currentIndex = 0
  const interval = window.setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length
    showImage(media, currentIndex)
  }, 5000)

  carouselIntervals.set(projectId, interval)
}

export function initCarousels() {
  document.querySelectorAll('.media').forEach((media) => {
    const projectId = media.getAttribute('data-project-id')
    if (!projectId) return

    startCarousel(media, projectId)

    media.querySelectorAll('.dot').forEach((dot) => {
      dot.addEventListener('click', (e) => {
        e.stopPropagation()
        const index = parseInt((dot as HTMLElement).dataset.index ?? '0')
        showImage(media, index)
        const existing = carouselIntervals.get(projectId)
        if (existing) clearInterval(existing)
        startCarousel(media, projectId)
      })
    })
  })
}
