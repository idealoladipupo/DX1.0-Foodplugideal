var hamburger = document.querySelector(".navmobile-menu")
var mobileLinksHolder = document.querySelector('.navmobile-links')
var backdrop = document.querySelector('.backdrop')


function hamburgerHandler(){
    hamburger.classList.toggle("showMenu")
    mobileLinksHolder.classList.toggle('Shownnavmobile-Links')
    backdrop.classList.toggle('showbackdrop')

}

ScrollReveal({ 
    reset: true,  
    distance: '100px',  
    duration: 2000,
    origin: 'left', });

ScrollReveal().reveal('.footer button', {origin: 'right', distance: '200px',});
ScrollReveal().reveal('.header-banner__content h1', {origin: 'left', distance: '200px',});
ScrollReveal().reveal('.counter-item, .foodcard-imageholder',{
    rotate: {
            y: 180,
         }
});
