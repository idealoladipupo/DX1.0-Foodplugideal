var hamburger = document.querySelector(".navmobile-menu")
var mobileLinksHolder = document.querySelector('.navmobile-links')
var backdrop = document.querySelector('.backdrop')


function hamburgerHandler(){
    hamburger.classList.toggle("showMenu")
    mobileLinksHolder.classList.toggle('Shownnavmobile-Links')
    backdrop.classList.toggle('showbackdrop')


}