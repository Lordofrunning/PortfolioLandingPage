import type { Project } from '../projects'

let currentProject: Project | null = null
let currentIndex = 0

export function initLightbox(projects: Project[]) {
  const lightbox = document.getElementById('lightbox')!
  const lightboxImg = lightbox.querySelector('.lightbox-img') as HTMLImageElement
  const lightboxCounter = lightbox.querySelector('.lightbox-counter') as HTMLElement
  const lightboxClose = lightbox.querySelector('.lightbox-close') as HTMLElement
  const lightboxPrev = lightbox.querySelector('.lightbox-prev') as HTMLElement
  const lightboxNext = lightbox.querySelector('.lightbox-next') as HTMLElement

  function updateLightbox() {
    if (!currentProject) return
    const images = currentProject.images
    lightboxImg.src = images[currentIndex]
    lightboxImg.alt = `${currentProject.title} - Image ${currentIndex + 1}`
    lightboxCounter.textContent = `${currentIndex + 1} / ${images.length}`
    const hasMultiple = images.length > 1
    lightboxPrev.style.display = hasMultiple ? '' : 'none'
    lightboxNext.style.display = hasMultiple ? '' : 'none'
    lightboxCounter.style.display = hasMultiple ? '' : 'none'
  }

  function openLightbox(project: Project, imageIndex: number) {
    currentProject = project
    currentIndex = imageIndex
    updateLightbox()
    lightbox.hidden = false
    document.body.style.overflow = 'hidden'
  }

  function closeLightbox() {
    lightbox.hidden = true
    document.body.style.overflow = ''
    currentProject = null
  }

  function prevImage() {
    if (!currentProject) return
    currentIndex = (currentIndex - 1 + currentProject.images.length) % currentProject.images.length
    updateLightbox()
  }

  function nextImage() {
    if (!currentProject) return
    currentIndex = (currentIndex + 1) % currentProject.images.length
    updateLightbox()
  }

  lightboxClose.addEventListener('click', closeLightbox)
  lightboxPrev.addEventListener('click', prevImage)
  lightboxNext.addEventListener('click', nextImage)
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox() })

  document.addEventListener('keydown', (e) => {
    if (lightbox.hidden) return
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowLeft') prevImage()
    if (e.key === 'ArrowRight') nextImage()
  })

  document.querySelectorAll('.media').forEach((media) => {
    media.addEventListener('click', (e) => {
      if ((e.target as HTMLElement).classList.contains('dot')) return
      const projectId = media.getAttribute('data-project-id')
      const project = projects.find(p => p.id === projectId)
      if (!project) return
      const activeImg = media.querySelector('img.active') as HTMLImageElement
      const imageIndex = parseInt(activeImg?.dataset.index ?? '0')
      openLightbox(project, imageIndex)
    })
  })
}
