const body = document.body
const optionsOfNavegation = document.querySelectorAll('.menu ul li a')
const buttonToggleMenu = document.querySelector('.toggle-menu')
const imgOfbuttonToggleMenu = document.querySelector('.toggle-menu img')

function openMenu() {
  body.classList.add('show')
  imgOfbuttonToggleMenu.setAttribute('src', './assets/icon-close-menu.svg')
}

function closeMenu() {
  body.classList.remove('show')
  imgOfbuttonToggleMenu.setAttribute('src', './assets/icon-open-menu.svg')
}

function showNavegation() {
  const isOpenMenu = !document.body.classList.contains('show')
  isOpenMenu ? openMenu() : closeMenu()
}

buttonToggleMenu.addEventListener('click', showNavegation)

optionsOfNavegation.forEach(option => {
  option.addEventListener('click', closeMenu)
})

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  mousewheel: true,
  keyboard: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination'
  },

  // Navigation arrows
  navigation: {
    slidesPerView: 1,
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar'
  }
})
