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
  experienceFill: HTMLDivElement
  experienceYears: HTMLElement
  description: HTMLElement
}

export class LanguageExperienceModal {
  private readonly elements: LanguageExperienceModalElements
  private readonly maxExperienceYears: number

  constructor(elements: LanguageExperienceModalElements, maxExperienceYears = 8) {
    this.elements = elements
    this.maxExperienceYears = maxExperienceYears
  }

  open(props: LanguageExperienceModalProps) {
    const { icon, title, experienceFill, experienceYears, description, overlay } = this.elements
    const fillPercent = Math.max(0, Math.min(100, (props.years / this.maxExperienceYears) * 100))

    icon.src = props.imageSrc
    icon.alt = props.imageAlt
    icon.style.background = props.imageBackground

    title.textContent = props.languageName
    experienceFill.style.width = `${fillPercent}%`
    experienceYears.textContent = `${props.years} yrs`
    description.textContent = props.description

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
