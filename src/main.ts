import './style.css'
import { projects } from './projects'
import type { Project } from './projects'

const app = document.querySelector<HTMLDivElement>('#app')
if (!app) throw new Error('Missing #app element')

app.innerHTML = `
  <div class="fixed-header"></div>
  <div class="top-banner">
    <h1>TT's Portfolio</h1>
  </div>
  <header class="site-header">
    <p>Selected web projects — live links and screenshots.</p>
  </header>
  <section id="projects" class="projects"></section>
  
  <!-- Lightbox overlay -->
  <div id="lightbox" class="lightbox" hidden>
    <button class="lightbox-close" aria-label="Close">&times;</button>
    <button class="lightbox-arrow lightbox-prev" aria-label="Previous">&lsaquo;</button>
    <img class="lightbox-img" src="" alt="" />
    <button class="lightbox-arrow lightbox-next" aria-label="Next">&rsaquo;</button>
    <div class="lightbox-counter"></div>
  </div>
`

const container = document.querySelector<HTMLDivElement>('#projects')!
container.innerHTML = projects
  .map(
    (p) => `
      <article class="project-card" data-id="${p.id}" data-type="${p.type}">
        <div class="media" data-project-id="${p.id}">
          ${p.images.map((img, i) => `
            <img 
              src="${img}" 
              alt="Screenshot ${i + 1} of ${p.title}" 
              loading="lazy" 
              class="${i === 0 ? 'active' : ''}"
              data-index="${i}"
            />
          `).join('')}
          ${p.images.length > 1 ? `
            <div class="carousel-dots">
              ${p.images.map((_, i) => `
                <span class="dot ${i === 0 ? 'active' : ''}" data-index="${i}"></span>
              `).join('')}
            </div>
          ` : ''}
        </div>
        <div class="content">
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          ${p.tags?.length ? `
          <div class="tags">
            ${p.tags.map((t) => `<span class="tag">${t}</span>`).join('')}
          </div>` : ''}
          <div class="links">
            ${p.type === 'web' && p.liveUrl ? `<a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="button primary">Live</a>` : ''}
            ${p.repoUrl ? `<a href="${p.repoUrl}" target="_blank" rel="noopener noreferrer" class="button">Code</a>` : ''}
          </div>
        </div>
      </article>
    `,
  )
  .join('')

// ===== Carousel auto-rotation =====
const carouselIntervals = new Map<string, number>()

function showImage(media: Element, index: number) {
  const images = media.querySelectorAll('img')
  const dots = media.querySelectorAll('.dot')
  
  images.forEach((img, i) => {
    img.classList.toggle('active', i === index)
  })
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index)
  })
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

// Initialize carousels
document.querySelectorAll('.media').forEach((media) => {
  const projectId = media.getAttribute('data-project-id')
  if (projectId) {
    startCarousel(media, projectId)
    
    // Click on dots to manually switch images
    media.querySelectorAll('.dot').forEach((dot) => {
      dot.addEventListener('click', (e) => {
        e.stopPropagation()
        const index = parseInt((dot as HTMLElement).dataset.index || '0')
        showImage(media, index)
        
        // Reset interval
        const existingInterval = carouselIntervals.get(projectId)
        if (existingInterval) clearInterval(existingInterval)
        startCarousel(media, projectId)
      })
    })
  }
})

// ===== Lightbox functionality =====
const lightbox = document.getElementById('lightbox')!
const lightboxImg = lightbox.querySelector('.lightbox-img') as HTMLImageElement
const lightboxCounter = lightbox.querySelector('.lightbox-counter') as HTMLElement
const lightboxClose = lightbox.querySelector('.lightbox-close') as HTMLElement
const lightboxPrev = lightbox.querySelector('.lightbox-prev') as HTMLElement
const lightboxNext = lightbox.querySelector('.lightbox-next') as HTMLElement

let currentProject: Project | null = null
let currentLightboxIndex = 0

function openLightbox(project: Project, imageIndex: number) {
  currentProject = project
  currentLightboxIndex = imageIndex
  updateLightbox()
  lightbox.hidden = false
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  lightbox.hidden = true
  document.body.style.overflow = ''
  currentProject = null
}

function updateLightbox() {
  if (!currentProject) return
  
  const images = currentProject.images
  lightboxImg.src = images[currentLightboxIndex]
  lightboxImg.alt = `${currentProject.title} - Image ${currentLightboxIndex + 1}`
  lightboxCounter.textContent = `${currentLightboxIndex + 1} / ${images.length}`
  
  // Show/hide arrows based on image count
  const hasMultiple = images.length > 1
  lightboxPrev.style.display = hasMultiple ? '' : 'none'
  lightboxNext.style.display = hasMultiple ? '' : 'none'
  lightboxCounter.style.display = hasMultiple ? '' : 'none'
}

function prevImage() {
  if (!currentProject) return
  currentLightboxIndex = (currentLightboxIndex - 1 + currentProject.images.length) % currentProject.images.length
  updateLightbox()
}

function nextImage() {
  if (!currentProject) return
  currentLightboxIndex = (currentLightboxIndex + 1) % currentProject.images.length
  updateLightbox()
}

// Event listeners for lightbox
lightboxClose.addEventListener('click', closeLightbox)
lightboxPrev.addEventListener('click', prevImage)
lightboxNext.addEventListener('click', nextImage)

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox()
})

document.addEventListener('keydown', (e) => {
  if (lightbox.hidden) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowLeft') prevImage()
  if (e.key === 'ArrowRight') nextImage()
})

// Click on media area (not buttons) to open lightbox
document.querySelectorAll('.media').forEach((media) => {
  media.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    if (target.classList.contains('dot')) return // Don't open on dot clicks
    
    const projectId = media.getAttribute('data-project-id')
    const project = projects.find(p => p.id === projectId)
    if (!project) return
    
    // Get currently visible image index
    const activeImg = media.querySelector('img.active') as HTMLImageElement
    const imageIndex = parseInt(activeImg?.dataset.index || '0')
    
    openLightbox(project, imageIndex)
  })
})

// ===== Fixed header on scroll =====
const fixedHeader = document.querySelector('.fixed-header')!
const topBanner = document.querySelector('.top-banner')!

function updateFixedHeader() {
  const bannerBottom = topBanner.getBoundingClientRect().bottom
  if (bannerBottom <= 0) {
    fixedHeader.classList.add('visible')
  } else {
    fixedHeader.classList.remove('visible')
  }
}

window.addEventListener('scroll', updateFixedHeader, { passive: true })
updateFixedHeader()
