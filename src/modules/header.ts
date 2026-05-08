export function initHeader() {
  const fixedHeader = document.querySelector('.fixed-header')!
  const topBanner = document.querySelector('.top-banner')!

  function updateFixedHeader() {
    fixedHeader.classList.toggle('visible', topBanner.getBoundingClientRect().bottom <= 0)
  }

  window.addEventListener('scroll', updateFixedHeader, { passive: true })
  updateFixedHeader()
}
