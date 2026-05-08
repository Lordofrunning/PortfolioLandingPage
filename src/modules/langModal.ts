import { LanguageExperienceModal, type LanguageExperienceModalProps } from '../components/languageExperienceModal'

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
    description: 'i used javascript for the first time in highschool, in a simple web dev class. i have been slowly learning more and more, and using it for different web dev projects.',
  },
  html: {
    languageName: 'HTML5',
    years: 4,
    description: 'its HTML. not much to say here 😁',
  },
  css: {
    languageName: 'CSS3',
    years: 4,
    description: 'Also started using CSS in highschool, along with HTML and javascript. ive also used tailwind a few times.',
  },
  python: {
    languageName: 'Python',
    years: 5,
    description: 'Python is the language i have the most experience with on backend programming, and probably am the most comfortable with when it comes to backend stuff. ive built the most projects with python, from texas holdem poker, to backend APIs.',
  },
  expo: {
    languageName: 'Expo',
    years: 2,
    description: 'when i got into mobile dev with react native, i went with expo, and have used it since.',
  },
  sql: {
    languageName: 'SQL',
    years: 1,
    description: 'havent had too much need for large scale databases yet, but i took a lengthy class in college that went over much of SQL and database organization and filtering.',
  },
  csharp: {
    languageName: 'C#',
    years: 7,
    description: 'the first language i ever used, i got into game development with unity, and was introduced to OOP principles very early on, and have come to love OOP.',
  },
  cpp: {
    languageName: 'C++',
    years: 1,
    description: 'the most recent language i am learning, mostly in school, cause i havent convinced myself to use this over python on any personal projects yet.',
  },
}

export function initLangModal() {
  const langModal = document.getElementById('lang-modal')!
  const langModalClose = langModal.querySelector('.modal-close') as HTMLElement
  const langModalIcon = document.getElementById('lang-modal-icon') as HTMLImageElement
  const langModalTitle = document.getElementById('lang-modal-title')!
  const langExperienceBlocksContainer = document.getElementById('lang-experience-blocks-container') as HTMLDivElement
  const langExperienceYears = document.getElementById('lang-experience-years') as HTMLSpanElement
  const langModalDescription = document.getElementById('lang-modal-description') as HTMLParagraphElement

  const languageModal = new LanguageExperienceModal({
    overlay: langModal,
    closeButton: langModalClose,
    icon: langModalIcon,
    title: langModalTitle,
    blocksContainer: langExperienceBlocksContainer,
    experienceYears: langExperienceYears,
    description: langModalDescription,
  })

  languageModal.bindDismissTriggers()

  document.querySelectorAll('.skill-icons img').forEach((icon) => {
    icon.addEventListener('click', (e) => {
      e.stopPropagation()
      const img = icon as HTMLImageElement
      const langKey = img.getAttribute('data-lang') ?? ''
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
}
