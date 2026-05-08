export function initProfileModal() {
  const profileBtn = document.getElementById('profile-btn')
  const avatarBtn = document.getElementById('avatar-btn')!
  const profileModal = document.getElementById('profile-modal')!
  const profileModalClose = profileModal.querySelector('.modal-close')!
  const profileBtnClose = profileModal.querySelector('.modal-btn-close')!
  const profileBtnMore = profileModal.querySelector('.modal-btn-primary')!

  function open() {
    profileModal.hidden = false
    document.body.style.overflow = 'hidden'
  }

  function close() {
    profileModal.hidden = true
    document.body.style.overflow = ''
  }

  if (profileBtn) profileBtn.addEventListener('click', open)
  avatarBtn.addEventListener('click', open)
  profileModalClose.addEventListener('click', close)
  profileBtnClose.addEventListener('click', close)
  profileBtnMore.addEventListener('click', () => profileModal.classList.toggle('expanded'))
  profileModal.addEventListener('click', (e) => { if (e.target === profileModal) close() })
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !profileModal.hidden) close()
  })
}
