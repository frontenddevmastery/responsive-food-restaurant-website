
//  toggle navbar
const openMenu = document.querySelector('.ri-menu-line')
const navLinks = document.querySelector('.nav__links')
const links = document.querySelectorAll('.nav__link')
const closeMenu = document.querySelector('.ri-close-line')

openMenu.addEventListener('click', slideInMenu)
closeMenu.addEventListener('click', slideOutMenu)

function slideInMenu() {
    navLinks.classList.toggle('show-nav')
    navLinks.style.opacity = 1
}

function slideOutMenu() {
    navLinks.classList.toggle('show-nav')
// navLinks.style.opacity = 0
}

function removeMenu () {
    links.forEach(link => {
        link.addEventListener('click', slideOutMenu)
    })
}
removeMenu()


// add box-shadow to header on scroll
const header = document.querySelector('header')
function boxShadowToHeader() {
    let scrollY = window.scrollY
    if (scrollY > 50) {
        header.classList.add('add-box-shadow')
    } else {
        header.classList.remove('add-box-shadow')
    }
}
window.addEventListener('scroll', boxShadowToHeader)


// make nav-link in header active on scrolling to it's position
const sections = document.querySelectorAll('.section')
function makeActiveNavLink() {
    sections.forEach(section => {
        let scrolledTop = window.scrollY
        let sectionOffsetTop = section.offsetTop - 60
        let sectionHeight = section.offsetHeight

        if (scrolledTop > sectionOffsetTop && scrolledTop < (sectionOffsetTop + sectionHeight)) {
            navLinks.querySelector(`[href = '#${section.getAttribute('id')}']`).classList.add('active-link')
        } else {
            navLinks.querySelector(`[href = '#${section.getAttribute('id')}']`).classList.remove('active-link')
        }
    })
}
makeActiveNavLink()
window.addEventListener('scroll', makeActiveNavLink)


// floating back to top button
const scrollBtn = document.querySelector('.scroll-btn')
function toggleScrollBtn() {
    let scrollY = window.scrollY
    if (scrollY > 250) {
        scrollBtn.classList.add('show')
    } else {
        scrollBtn.classList.remove('show')
    }
}
window.addEventListener('scroll', toggleScrollBtn)


// light and dark theme
let themeBtn = document.querySelector('.theme-btn')
let selectedTheme = localStorage.getItem('selected-theme')
let selectedIcon = localStorage.getItem('selected-icon')

function updateTheme () {
    if (selectedTheme) {
        document.querySelector('body').classList.add(selectedTheme)
        themeBtn.classList.add(selectedIcon)
    } else {
        document.querySelector('body').classList.contains('dark') ? localStorage.setItem('selected-theme', 'dark') : localStorage.setItem('selected-theme', null)
        themeBtn.classList.contains('dark') ? localStorage.setItem('selected-icon', 'ri-sun-line') : localStorage.setItem('selected-icon', 'ri-moon-line')
    }
    return selectedTheme
}
updateTheme()


function themes () {
    let isDark = document.querySelector('body').classList.contains('dark')

    if (isDark) {
        document.querySelector('body').classList.remove('dark')
        themeBtn.classList.remove('ri-sun-line')
        themeBtn.classList.add('ri-moon-line')

        localStorage.setItem('selected-theme', null)
        localStorage.setItem('selected-icon', 'ri-moon-line')
    } else {
        document.querySelector('body').classList.add('dark')
        themeBtn.classList.add('ri-sun-line')
        themeBtn.classList.remove('ri-moon-line')

        localStorage.setItem('selected-theme', 'dark')
        localStorage.setItem('selected-icon', 'ri-sun-line')
    }
    // updateTheme()
}
themeBtn.addEventListener('click', themes)


// scroll reveal
const scrollreveal = ScrollReveal({
    origin: 'top',
    distance: '50px',
    delay: 100,
    duration: 2000,
    reset: true,
    easing: 'ease-in-out'
}) 
scrollreveal.reveal(`.hero__img, .offers__subtitle, .offers__title, .special__subtitle, .special__title, .app__img`)
scrollreveal.reveal(`.hero__info, .app__info, .footer__left-wrapper, .copyright-text`, {origin: 'bottom'})
scrollreveal.reveal(`.about-us__img, .talk__info`, {origin: 'left'})
scrollreveal.reveal(`.about-us__info, .talk__btn`, {origin: 'right'})
scrollreveal.reveal(`.offers__card, .special__card`, {interval: 100})
scrollreveal.reveal(`.nav__link`, {interval: 250, duration:  1000, distance: '0px', reset: false})
scrollreveal.reveal(`.footer__section`, {origin: 'bottom', interval: 200})

