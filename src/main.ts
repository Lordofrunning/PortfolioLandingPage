import './style.css'
import { projects } from './projects'

const app = document.querySelector<HTMLDivElement>('#app')
if (!app) throw new Error('Missing #app element')

app.innerHTML = `
  <header class="site-header">
    <h1>Tyler's Portfolio</h1>
    <p>Selected web projects — live links and screenshots.</p>
  </header>
  <section id="projects" class="projects"></section>
`

const container = document.querySelector<HTMLDivElement>('#projects')!
container.innerHTML = projects
  .map(
    (p) => `
      <article class="project-card" data-id="${p.id}">
        <div class="media">
          <img src="${p.image}" alt="Screenshot of ${p.title}" loading="lazy" />
        </div>
        <div class="content">
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          ${p.tags?.length ? `
          <div class="tags">
            ${p.tags.map((t) => `<span class="tag">${t}</span>`).join('')}
          </div>` : ''}
          <div class="links">
            ${p.liveUrl ? `<a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="button primary">Live</a>` : ''}
            ${p.repoUrl ? `<a href="${p.repoUrl}" target="_blank" rel="noopener noreferrer" class="button">Code</a>` : ''}
          </div>
        </div>
      </article>
    `,
  )
  .join('')
