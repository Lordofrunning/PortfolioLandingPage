export type LanguageExperienceModalProps = {
  imageSrc: string
  imageAlt: string
  languageName: string
  years: number
  description: string
  imageBackground: string
}

type LanguageExperienceModalElements = {
  overlay: HTMLElement
  closeButton: HTMLElement
  icon: HTMLImageElement
  title: HTMLElement
  blocksContainer: HTMLDivElement
  experienceYears: HTMLElement
  description: HTMLElement
}

export class LanguageExperienceModal {
  private readonly elements: LanguageExperienceModalElements

  constructor(elements: LanguageExperienceModalElements) {
    this.elements = elements
  }

  open(props: LanguageExperienceModalProps) {
    const { icon, title, blocksContainer, experienceYears, description, overlay } = this.elements

    icon.src = props.imageSrc
    icon.alt = props.imageAlt
    icon.style.background = props.imageBackground

    title.textContent = props.languageName
    experienceYears.textContent = `${props.years} ${props.years === 1 ? 'year' : 'years'}`
    description.textContent = props.description

    // Create blocks for each year
    blocksContainer.innerHTML = ''
    const blockCount = Math.min(props.years, 10) // Cap at 10 visible blocks
    for (let i = 0; i < blockCount; i++) {
      const block = document.createElement('div')
      block.className = 'experience-block'
      block.style.animationDelay = `${i * 0.05}s`
      blocksContainer.appendChild(block)
    }

    overlay.hidden = false
    document.body.style.overflow = 'hidden'
  }

  close() {
    this.elements.overlay.hidden = true
    document.body.style.overflow = ''
  }

  bindDismissTriggers() {
    this.elements.closeButton.addEventListener('click', () => this.close())

    this.elements.overlay.addEventListener('click', (e) => {
      if (e.target === this.elements.overlay) {
        this.close()
      }
    })

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !this.elements.overlay.hidden) {
        this.close()
      }
    })
  }
}
