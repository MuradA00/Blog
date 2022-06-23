const headerCloseIcon = document.querySelector('.header__close-icon')
const headerTop = document.querySelector('.header__top')
const burger = document.querySelector('.burger')
const mobMenu = document.querySelector('.mob-navigation')


  AOS.init();


headerCloseIcon.addEventListener('click', function() {
  headerTop.classList.add('_hidden')
})


burger.addEventListener('click', () => {
  burger.classList.toggle('--active-burger')
  if (burger.classList.contains('--active-burger')) {
    mobMenu.classList.add('--active-menu')
    body.classList.add('--body-locked')
    body.classList.add('--menu-opened')
  } else {
    mobMenu.classList.remove('--active-menu')
    body.classList.remove('--body-locked')
    body.classList.remove('--menu-opened')
  }
})
