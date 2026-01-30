import './style.css'
import { projects } from './projects'
import type { Project } from './projects'
import { initFireTrail, setFireTrailEnabled, setFireTrailColor, setFireTrailSize } from './fireTrail'

// Initialize fire trail effect
initFireTrail()

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
      <button class="nav-icon profile-btn" id="profile-btn" title="About Me">
        <img src="/PictureOfMeCropped.JPG" alt="Profile" class="nav-profile-img" />
      </button>
    </nav>
  </div>
  
  <!-- Profile Modal -->
  <div id="profile-modal" class="profile-modal" hidden>
    <div class="profile-modal-content">
      <button class="profile-modal-close" aria-label="Close">&times;</button>
      <img src="/PictureOfMeCropped.JPG" alt="Profile Picture" class="profile-pic" />
      <h2>About Me</h2>
      <p>Add your bio here...</p>
    </div>
  </div>
  
  <div class="top-banner">
    <h1>TT's Portfolio</h1>
  </div>
  <header class="site-header">
    <!-- header under top banner if needed -->
  </header>
  
  <!-- Info Cards -->
  <section class="info-cards">
    <article class="info-card profile-card">
      <div class="info-card-body">
        <button class="avatar-btn" id="avatar-btn" title="About Me">
          <img src="/PictureOfMeCropped.JPG" alt="Profile" class="info-card-avatar" />
        </button>
        <div class="info-card-content">
          <h3 class="info-card-name">TT</h3>
          <p class="info-card-location">🌍📍Utah USA🦅</p>
          <p class="info-card-extra">💼 Your Role / Title</p>
        </div>
        <div class="skill-icons">
          <div class="skill-item">
            <img src="/icons/react.svg" alt="React" data-lang="react" />
            <span>React</span>
          </div>
          <div class="skill-item">
            <img src="/icons/javascript.svg" alt="JavaScript" data-lang="javascript" />
            <span>JS</span>
          </div>
          <div class="skill-item">
            <img src="/icons/html5.svg" alt="HTML" data-lang="html" />
            <span>HTML</span>
          </div>
          <div class="skill-item">
            <img src="/icons/css.svg" alt="CSS" data-lang="css" />
            <span>CSS</span>
          </div>
          <div class="skill-item">
            <img src="/icons/python.svg" alt="Python" data-lang="python" />
            <span>Python</span>
          </div>
          <div class="skill-item">
            <img src="/icons/expo.svg" alt="Expo" data-lang="expo" />
            <span>Expo</span>
          </div>
          <div class="skill-item">
            <img src="/icons/mysql.svg" alt="SQL" data-lang="sql" />
            <span>SQL</span>
          </div>
          <div class="skill-item">
            <img src="/icons/csharpGrey.svg" alt="C#" data-lang="csharp" />
            <span>C#</span>
          </div>
          <div class="skill-item">
            <img src="/icons/cplusplus.svg" alt="C++" data-lang="cpp" />
            <span>C++</span>
          </div>
        </div>
      </div>
    </article>
    <!-- <article class="info-card controller-panel">
      <div class="info-card-body">
        <div class="effects-header">
          <h3>Try Some Cool Effects?</h3>
          <label class="toggle-switch">
            <input type="checkbox" id="effects-toggle" />
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>
      <div class="effects-expand" id="effects-controls" hidden>
        <div class="control-item">
          <span class="control-label-small">Fire Trail</span>
          <label class="toggle-switch toggle-small">
            <input type="checkbox" id="fire-toggle" />
            <span class="toggle-slider"></span>
          </label>
        </div>
        <div class="control-item">
          <span class="control-label-small">Color</span>
          <input type="color" id="fire-color" value="#ff6600" class="color-picker" />
        </div>
        <div class="control-item">
          <span class="control-label-small">Size</span>
          <input type="range" id="fire-size" min="0.5" max="2" step="0.1" value="1" class="size-slider" />
        </div>
      </div>
    </article> -->
  </section>
  
  <!-- Projects Dropdown Section -->
  <div class="projects-dropdown-container">
    <button class="projects-dropdown-toggle" id="projects-toggle">
      <span class="projects-title">Projects</span>
      <svg class="dropdown-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </button>
    <div class="projects-dropdown-content" id="projects-content">
      <section id="projects" class="projects"></section>
    </div>
  </div>
  
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
const avatarBtn = document.getElementById('avatar-btn')!
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
avatarBtn.addEventListener('click', openProfileModal)

profileModalClose.addEventListener('click', closeProfileModal)

profileModal.addEventListener('click', (e) => {
  if (e.target === profileModal) closeProfileModal()
})

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !profileModal.hidden) closeProfileModal()
})

// ===== Effects Toggle =====
// const effectsToggle = document.getElementById('effects-toggle') as HTMLInputElement
// const fireToggle = document.getElementById('fire-toggle') as HTMLInputElement
// const fireColorPicker = document.getElementById('fire-color') as HTMLInputElement
// const fireSizeSlider = document.getElementById('fire-size') as HTMLInputElement
// const effectsControls = document.getElementById('effects-controls') as HTMLDivElement
// const controllerPanel = document.querySelector('.controller-panel') as HTMLElement

// // Start collapsed
// controllerPanel.classList.add('collapsed')

// // Main effects toggle controls all effects
// effectsToggle.addEventListener('change', () => {
//   const enabled = effectsToggle.checked
//   // Show/hide the controls panel and expand/collapse the panel
//   effectsControls.hidden = !enabled
//   controllerPanel.classList.toggle('collapsed', !enabled)
//   // Flick all sub-toggles to match main toggle
//   fireToggle.checked = enabled
//   setFireTrailEnabled(enabled)
// })

// // Fire trail specific toggle
// fireToggle.addEventListener('change', () => {
//   setFireTrailEnabled(fireToggle.checked)
//   // If turning off fire trail while main is on, keep main on
//   // If turning on fire trail, make sure main is on too
//   if (fireToggle.checked && !effectsToggle.checked) {
//     effectsToggle.checked = true
//   }
// })

// // Fire trail color picker
// fireColorPicker.addEventListener('input', () => {
//   setFireTrailColor(fireColorPicker.value)
// })

// // Fire trail size slider
// function updateSliderTrack() {
//   const min = parseFloat(fireSizeSlider.min)
//   const max = parseFloat(fireSizeSlider.max)
//   const val = parseFloat(fireSizeSlider.value)
//   const progress = ((val - min) / (max - min)) * 100
//   fireSizeSlider.style.setProperty('--slider-progress', `${progress}%`)
// }

// fireSizeSlider.addEventListener('input', () => {
//   setFireTrailSize(parseFloat(fireSizeSlider.value))
//   updateSliderTrack()
// })

// // Initialize slider track
// updateSliderTrack()

// ===== Projects Dropdown Toggle =====
const projectsToggle = document.getElementById('projects-toggle') as HTMLButtonElement
const projectsContent = document.getElementById('projects-content') as HTMLDivElement

projectsToggle.addEventListener('click', () => {
  const isExpanded = projectsContent.classList.toggle('expanded')
  projectsToggle.classList.toggle('expanded', isExpanded)
  projectsToggle.setAttribute('aria-expanded', isExpanded.toString())
})
