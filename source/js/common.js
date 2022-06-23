const headerCloseIcon = document.querySelector('.header__close-icon')
const headerTop = document.querySelector('.header__top')

headerCloseIcon.addEventListener('click', function() {
  headerTop.classList.add('_hidden')
})
