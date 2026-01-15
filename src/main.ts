import './style.css'
import { projects } from './projects'
import type { Project } from './projects'

const app = document.querySelector<HTMLDivElement>('#app')
if (!app) throw new Error('Missing #app element')

app.innerHTML = `
  <div class="fixed-header">
    <h1>TT's Portfolio</h1>
    <nav class="header-nav">
      <a href="#" class="nav-icon" id="nav-placeholder" title="Coming Soon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/><text x="12" y="16" text-anchor="middle" font-size="10">?</text></svg>
      </a>
      <a href="https://github.com/Lordofrunning" target="_blank" rel="noopener noreferrer" class="nav-icon" title="GitHub">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
      </a>
      <button class="nav-icon" id="profile-btn" title="About Me">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
      </button>
    </nav>
  </div>
  
  <!-- Profile Modal -->
  <div id="profile-modal" class="profile-modal" hidden>
    <div class="profile-modal-content">
      <button class="profile-modal-close" aria-label="Close">&times;</button>
      <img src="" alt="Profile Picture" class="profile-pic" />
      <h2>About Me</h2>
      <p>Add your bio here...</p>
    </div>
  </div>
  
  <div class="top-banner">
    <h1>TT's Portfolio</h1>
  </div>
  <header class="site-header">
    <p>Selected web projects — live links and screenshots.</p>
  </header>
  
  <!-- Info Cards -->
  <section class="info-cards">
    <article class="info-card">
      <div class="info-card-header">
        <img src="" alt="Profile" class="info-card-avatar" />
      </div>
      <div class="info-card-body">
        <h3 class="info-card-name">Your Full Name</h3>
        <p class="info-card-location">📍 Your Location</p>
        <p class="info-card-extra">💼 Your Role / Title</p>
        <p class="info-card-bio">Add a short bio or description about yourself here. Talk about your skills, interests, and what you're passionate about in development.</p>
      </div>
    </article>
    <article class="info-card">
      <div class="info-card-body">
        <h3>Coming Soon</h3>
        <p class="info-card-bio">This card can be used for additional information, links, or anything else you'd like to showcase.</p>
      </div>
    </article>
  </section>
  
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
            ${p.tags.map((t) => `<span class="tag" data-lang="${t.toLowerCase().replace(/\s+/g, '')}">${t}</span>`).join('')}
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

// ===== Profile Modal =====
const profileBtn = document.getElementById('profile-btn')!
const profileModal = document.getElementById('profile-modal')!
const profileModalClose = profileModal.querySelector('.profile-modal-close')!

function openProfileModal() {
  profileModal.hidden = false
  document.body.style.overflow = 'hidden'
}

function closeProfileModal() {
  profileModal.hidden = true
  document.body.style.overflow = ''
}

profileBtn.addEventListener('click', openProfileModal)

profileModalClose.addEventListener('click', closeProfileModal)

profileModal.addEventListener('click', (e) => {
  if (e.target === profileModal) closeProfileModal()
})

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !profileModal.hidden) closeProfileModal()
})
