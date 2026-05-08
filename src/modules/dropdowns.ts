function bindDropdown(toggleId: string, contentId: string) {
  const toggle = document.getElementById(toggleId) as HTMLButtonElement
  const content = document.getElementById(contentId) as HTMLDivElement

  toggle.addEventListener('click', () => {
    const isExpanded = content.classList.toggle('expanded')
    toggle.classList.toggle('expanded', isExpanded)
    toggle.setAttribute('aria-expanded', isExpanded.toString())
  })

  return { toggle, content }
}

export function initDropdowns() {
  const { content: projectsContent, toggle: projectsToggle } = bindDropdown('projects-toggle', 'projects-content')
  const { content: itsecurityContent, toggle: itsecurityToggle } = bindDropdown('itsecurity-toggle', 'itsecurity-content')
  const { content: gamedevContent, toggle: gamedevToggle } = bindDropdown('gamedev-toggle', 'gamedev-content')
  bindDropdown('education-toggle', 'education-content')

  // Nested course dropdown (uses hidden attribute, not class)
  const cybr2300Toggle = document.getElementById('cybr2300-toggle') as HTMLButtonElement
  const cybr2300Content = document.getElementById('cybr2300-content') as HTMLElement
  cybr2300Toggle.addEventListener('click', () => {
    cybr2300Content.hidden = !cybr2300Content.hidden
    const isExpanded = !cybr2300Content.hidden
    cybr2300Toggle.classList.toggle('expanded', isExpanded)
    cybr2300Toggle.setAttribute('aria-expanded', isExpanded.toString())
  })

  // Role titles scroll to and open the matching section
  const roleSoftware = document.querySelector<HTMLElement>('.role-software')
  const roleIT = document.querySelector<HTMLElement>('.role-ai')
  const roleGameDev = document.querySelector<HTMLElement>('.role-gamedev')

  if (roleSoftware) {
    roleSoftware.addEventListener('click', () => {
      const wasExpanded = projectsContent.classList.contains('expanded')
      projectsToggle.click()
      if (!wasExpanded) projectsContent.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  if (roleIT) {
    roleIT.addEventListener('click', () => {
      const wasExpanded = itsecurityContent.classList.contains('expanded')
      itsecurityToggle.click()
      if (!wasExpanded) itsecurityContent.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  if (roleGameDev) {
    roleGameDev.addEventListener('click', () => {
      const wasExpanded = gamedevContent.classList.contains('expanded')
      gamedevToggle.click()
      if (!wasExpanded) gamedevContent.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }
}
