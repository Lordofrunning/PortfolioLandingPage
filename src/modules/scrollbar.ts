export function initScrollbar() {
  let scrollbarTimeout: number | undefined

  function showScrollbar() {
    document.documentElement.style.setProperty('--scrollbar-color', 'rgba(255, 255, 255, 1)')
    if (scrollbarTimeout) clearTimeout(scrollbarTimeout)
    scrollbarTimeout = window.setTimeout(() => {
      document.documentElement.style.setProperty('--scrollbar-color', 'transparent')
    }, 1000)
  }

  window.addEventListener('scroll', showScrollbar, { passive: true })
  window.addEventListener('wheel', showScrollbar, { passive: true })
}
