import './style.css'
import { projects } from './projects'
import type { Project } from './projects'
import { initFireTrail } from './fireTrail'
import { LanguageExperienceModal, type LanguageExperienceModalProps } from './components/languageExperienceModal'

// Initialize fire trail effect
initFireTrail()

const app = document.querySelector<HTMLDivElement>('#app')
if (!app) throw new Error('Missing #app element')

app.innerHTML = `
  <div class="fixed-header">
    <h1>My Portfolio</h1>
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
  <div id="profile-modal" class="modal-overlay" hidden>
    <div class="profile-modal-content">
      <button class="modal-close" aria-label="Close">&times;</button>
      <img src="/PictureOfMeCropped.JPG" alt="Profile Picture" class="profile-pic" />
      <h2>About Me</h2>
      <p>Heyo! im Tyler. ive been coding since 2019, i started learning c# with Unity Game dev. i really enjoyed the coding aspect, and branched into other languages. im currently a sophmore in colledge, sutdying computer science. </p>
    </div>
    <div class="profile-modal-buttons">
      <button class="profile-btn profile-btn-primary">More About Me</button>
      <button class="profile-btn profile-btn-close">Close</button>
    </div>
  </div>
  
  <!-- Language Icon Modal -->
  <div id="lang-modal" class="modal-overlay" hidden>
    <div class="lang-modal-content">
      <button class="modal-close" aria-label="Close">&times;</button>
      <div class="lang-icon-display">
        <img id="lang-modal-icon" src="" alt="" />
      </div>
      <div class="lang-modal-main">
        <h2 id="lang-modal-title"></h2>
        <p id="lang-modal-description" class="lang-modal-description"></p>
      </div>
      <div class="lang-modal-bars">
        <div id="lang-experience-blocks-container" class="lang-experience-blocks-container"></div>
        <span id="lang-experience-years" class="lang-experience-years"></span>
      </div>
    </div>
  </div>
  
  <div class="top-banner">
    <h1>My Portfolio</h1>
  </div>
  <header class="site-header">
    <!-- header under top banner if needed -->
  </header>
  
  <!-- Info Cards -->
  <section class="info-cards">
    <article class="info-card profile-card">
      <div class="info-card-body">
        <div class="avatar-container">
          <button class="avatar-btn" id="avatar-btn" title="About Me">
            <img src="/PictureOfMeCropped.JPG" alt="Profile" class="info-card-avatar" />
          </button>
          <a href="https://github.com/Lordofrunning" target="_blank" rel="noopener noreferrer" class="avatar-github-link" title="GitHub">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
        </div>
        <div class="info-card-content">
          <h3 class="info-card-name">Tyler</h3>
          <p class="info-card-location">🌍📍Utah USA🦅</p>
          <p class="info-card-extra">Student/Developer </p>
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
  
  <div class="roles-container">
    <h1 class="role-title role-software">Software Designer</h1>
    <h1 class="role-title role-ai">Information Technology</h1>
    <h1 class="role-title role-gamedev">Game Development</h1>
  </div>
  
  <!-- Projects Dropdown Section -->
  <div class="projects-dropdown-container">
    <button class="projects-dropdown-toggle" id="projects-toggle">
      <span class="projects-title">Software/Websites/Apps</span>
      <svg class="dropdown-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </button>
    <div class="projects-dropdown-content" id="projects-content">
      <section id="projects" class="projects"></section>
    </div>
  </div>

  <!-- IT/Cyber Security Dropdown Section -->
  <div class="projects-dropdown-container">
    <button class="projects-dropdown-toggle" id="itsecurity-toggle">
      <span class="projects-title">IT/Cyber Security</span>
      <svg class="dropdown-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </button>
    <div class="projects-dropdown-content" id="itsecurity-content">
      <section id="itsecurity" class="itsecurity-section">
        <div class="itsecurity-columns">
          <div class="itsecurity-column itsecurity-left">
            <h3>IT Certifications</h3>
            <p>Add your IT/Cyber Security content here</p>
          </div>
          <div class="itsecurity-column itsecurity-center">
            <h3>Labs and Course Work</h3>
            <p>Add your IT/Cyber Security content here</p>
          </div>
          <div class="itsecurity-column itsecurity-right">
            <h3>Experience</h3>
            <p>Add your IT/Cyber Security content here</p>
          </div>
        </div>
      </section>
    </div>
  </div>

  <!-- Game Development Dropdown Section -->
  <div class="projects-dropdown-container">
    <button class="projects-dropdown-toggle" id="gamedev-toggle">
      <span class="projects-title">Game Development</span>
      <svg class="dropdown-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </button>
    <div class="projects-dropdown-content" id="gamedev-content">
      <section id="gamedev" class="gamedev-section">
        <!-- Content will go here -->
      </section>
    </div>
  </div>
  
  <!-- Education Dropdown Section -->
  <div class="projects-dropdown-container">
    <button class="projects-dropdown-toggle" id="education-toggle">
      <span class="projects-title">Education</span>
      <svg class="dropdown-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </button>
    <div class="projects-dropdown-content" id="education-content">
      <section id="education" class="education-section">
        <article class="education-card">
          <div class="education-media">
            <img src="/Images/EducationImage/Weber-State-Wildcats-logo.png" alt="Weber State University" loading="lazy" />
          </div>
          <div class="education-body">
            <h3>Weber State University</h3>
            <p class="education-meta">Computer Science, Sophomore</p>
            <p>
              Continuing to grow in software engineering fundamentals while applying coursework concepts to real portfolio and mobile app projects.
            </p>
            <ul class="education-points">
              <li>Focus areas: data structures, algorithms, and software design</li>
              <li>Applying classroom concepts in Javascript, SQL, Python, and C++ projects</li>
            </ul>
          </div>
        </article>
      </section>
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

// code to display the projects. 
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
const profileBtn = document.getElementById('profile-btn')
const avatarBtn = document.getElementById('avatar-btn')!
const profileModal = document.getElementById('profile-modal')!
const profileModalClose = profileModal.querySelector('.modal-close')!
const profileBtnClose = profileModal.querySelector('.profile-btn-close')!
const profileBtnMore = profileModal.querySelector('.profile-btn-primary')!

function openProfileModal() {
  profileModal.hidden = false
  document.body.style.overflow = 'hidden'
}

function closeProfileModal() {
  profileModal.hidden = true
  document.body.style.overflow = ''
}

if (profileBtn) {
  profileBtn.addEventListener('click', openProfileModal)
}
avatarBtn.addEventListener('click', openProfileModal)

profileModalClose.addEventListener('click', closeProfileModal)
profileBtnClose.addEventListener('click', closeProfileModal)
profileBtnMore.addEventListener('click', () => {
  profileModal.classList.toggle('expanded')
})

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

// ===== IT/Cyber Security Dropdown Toggle =====
const itsecurityToggle = document.getElementById('itsecurity-toggle') as HTMLButtonElement
const itsecurityContent = document.getElementById('itsecurity-content') as HTMLDivElement

itsecurityToggle.addEventListener('click', () => {
  const isExpanded = itsecurityContent.classList.toggle('expanded')
  itsecurityToggle.classList.toggle('expanded', isExpanded)
  itsecurityToggle.setAttribute('aria-expanded', isExpanded.toString())
})

// ===== Game Development Dropdown Toggle =====
const gamedevToggle = document.getElementById('gamedev-toggle') as HTMLButtonElement
const gamedevContent = document.getElementById('gamedev-content') as HTMLDivElement

gamedevToggle.addEventListener('click', () => {
  const isExpanded = gamedevContent.classList.toggle('expanded')
  gamedevToggle.classList.toggle('expanded', isExpanded)
  gamedevToggle.setAttribute('aria-expanded', isExpanded.toString())
})

// ===== Education Dropdown Toggle =====
const educationToggle = document.getElementById('education-toggle') as HTMLButtonElement
const educationContent = document.getElementById('education-content') as HTMLDivElement

educationToggle.addEventListener('click', () => {
  const isExpanded = educationContent.classList.toggle('expanded')
  educationToggle.classList.toggle('expanded', isExpanded)
  educationToggle.setAttribute('aria-expanded', isExpanded.toString())
})

// ===== Role Title Clicks Open Dropdowns =====
const roleSoftware = document.querySelector('.role-software') as HTMLElement | null
const roleIT = document.querySelector('.role-ai') as HTMLElement | null
const roleGameDev = document.querySelector('.role-gamedev') as HTMLElement | null

if (roleSoftware) {
  roleSoftware.style.cursor = 'pointer'
  roleSoftware.addEventListener('click', () => {
    const isCurrentlyExpanded = projectsContent.classList.contains('expanded')
    projectsToggle.click()
    if (!isCurrentlyExpanded) {
      projectsContent.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
}

if (roleIT) {
  roleIT.style.cursor = 'pointer'
  roleIT.addEventListener('click', () => {
    const isCurrentlyExpanded = itsecurityContent.classList.contains('expanded')
    itsecurityToggle.click()
    if (!isCurrentlyExpanded) {
      itsecurityContent.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
}

if (roleGameDev) {
  roleGameDev.style.cursor = 'pointer'
  roleGameDev.addEventListener('click', () => {
    const isCurrentlyExpanded = gamedevContent.classList.contains('expanded')
    gamedevToggle.click()
    if (!isCurrentlyExpanded) {
      gamedevContent.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
}

// ===== Language Icon Modal =====
const langModal = document.getElementById('lang-modal')!
const langModalClose = langModal.querySelector('.modal-close') as HTMLElement
const langModalIcon = document.getElementById('lang-modal-icon') as HTMLImageElement
const langModalTitle = document.getElementById('lang-modal-title')!
const langExperienceBlocksContainer = document.getElementById('lang-experience-blocks-container') as HTMLDivElement
const langExperienceYears = document.getElementById('lang-experience-years') as HTMLSpanElement
const langModalDescription = document.getElementById('lang-modal-description') as HTMLParagraphElement

type LanguageEntry = {
  languageName: string
  years: number
  description: string
}

const languageEntries: Record<string, LanguageEntry> = {
  react: {
    languageName: 'React',
    years: 2,
    description: 'ive used React for most of my web development projects, mostly personal small projects for fun, and to just learn more about it. this portfolio is one of thoes.',
  },
  javascript: {
    languageName: 'JavaScript',
    years: 4,
    description: 'i used javascript for the first time in highschool, in a simple web dev class. i have been slowly learning more and more, and using it for different web dev projects. ',
  },
  html: {
    languageName: 'HTML5',
    years: 4,
    description: 'its HTML. not much to say here 😁',
  },
  css: {
    languageName: 'CSS3',
    years: 4,
    description: 'Also started using CSS in highschool, along with HTML and javascript. ive also used tailwind a  few times. ',
  },
  python: {
    languageName: 'Python',
    years: 5,
    description: 'Python is the language i have the most experience with on backend programming, and probably am the most comfortable with when it comes to backend stuff. ive built the most projects with python, from texas holdem poker, to backend APIs. ',
  },
  expo: {
    languageName: 'Expo',
    years: 2,
    description: 'when i got into mobile dev with react nateive, i went with expo, and have used it since.',
  },
  sql: {
    languageName: 'SQL',
    years: 1,
    description: 'havent had to much need for large scale databases yet, but i took a lengthy class in college that went over much of SQL and database organization and filtering. ',
  },
  csharp: {
    languageName: 'C#',
    years: 7,
    description: 'the first language i ever used, i got into game development with unity, and was introduced to OOP principles very early on, and have come to love OOP.',
  },
  cpp: {
    languageName: 'C++',
    years: 1,
    description: 'the most recent language i am learing, mostly in school, cause i havent convicned myself to use this over python on any personal projects yet. ',
  },
}

const languageModal = new LanguageExperienceModal(
  {
    overlay: langModal,
    closeButton: langModalClose,
    icon: langModalIcon,
    title: langModalTitle,
    blocksContainer: langExperienceBlocksContainer,
    experienceYears: langExperienceYears,
    description: langModalDescription,
  },
)

languageModal.bindDismissTriggers()

const languageIcons = document.querySelectorAll('.skill-icons img')
languageIcons.forEach((icon) => {
  icon.addEventListener('click', (e) => {
    e.stopPropagation()
    const img = icon as HTMLImageElement
    const langKey = img.getAttribute('data-lang') || ''
    const entry = languageEntries[langKey]

    if (!entry) return

    const background = window.getComputedStyle(img).backgroundColor

    const modalProps: LanguageExperienceModalProps = {
      imageSrc: img.src,
      imageAlt: entry.languageName,
      languageName: entry.languageName,
      years: entry.years,
      description: entry.description,
      imageBackground: background,
    }

    languageModal.open(modalProps)
  })
})

// ===== Custom Scrollbar Fade In/Out =====
let scrollbarTimeout: number | undefined

function showScrollbar() {
  document.documentElement.style.setProperty('--scrollbar-color', 'rgba(255, 255, 255, 1)')
  
  if (scrollbarTimeout) {
    clearTimeout(scrollbarTimeout)
  }
  
  scrollbarTimeout = window.setTimeout(() => {
    document.documentElement.style.setProperty('--scrollbar-color', 'transparent')
  }, 1000) // Fade out after 1 second of no scrolling
}

window.addEventListener('scroll', showScrollbar, { passive: true })
window.addEventListener('wheel', showScrollbar, { passive: true })
