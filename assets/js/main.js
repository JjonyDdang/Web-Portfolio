/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    //when the scroll is greater than 50 viewpoint height, add
    if(this.scrollY >= 50) header.classList.add('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

/*=============== SERVICES MODAL ===============*/


/*=============== MIXITUP FILTER PORTFOLIO ===============*/

/* Link active work */ 


/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== LIGHT DARK THEME ===============*/  
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 1000,
  delay: 500,
  //reset: true
})

sr.reveal('.home__data')
sr.reveal('.home__data, .home__social, .home__handle, .about__data, .skills__data', {delay: 500, origin: 'top'})
