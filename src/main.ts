import './style.css'
import { projects } from './projects'
import { template } from './template'
import { initHeader } from './modules/header'
import { initDropdowns } from './modules/dropdowns'
import { initCarousels } from './modules/carousel'
import { initLightbox } from './modules/lightbox'
import { initProfileModal } from './modules/profileModal'
import { initLangModal } from './modules/langModal'
import { initScrollbar } from './modules/scrollbar'
import { initCharts } from './modules/charts'

const app = document.querySelector<HTMLDivElement>('#app')
if (!app) throw new Error('Missing #app element')

app.innerHTML = template

const projectsContainer = document.querySelector<HTMLDivElement>('#projects')!
projectsContainer.innerHTML = projects.map((p) => `
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
        </div>
      ` : ''}
      <div class="links">
        ${p.type === 'web' && p.liveUrl ? `<a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="button primary">Live</a>` : ''}
        ${p.repoUrl ? `<a href="${p.repoUrl}" target="_blank" rel="noopener noreferrer" class="button">Code</a>` : ''}
      </div>
    </div>
  </article>
`).join('')

initHeader()
initDropdowns()
initCarousels()
initLightbox(projects)
initProfileModal()
initLangModal()
initScrollbar()
initCharts()
