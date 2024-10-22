// MENU MOBILE

// SELECT ELEMENTS
const mobileMenu = document.getElementById('menu-mobile');
const closeMenu = document.getElementById('menu-close');
const menu = document.querySelector('.nav-menu ul');

mobileMenu.addEventListener('click', (e) => {
    mobileMenu.style.display = "none";
    menu.style.display = "block";
    closeMenu.style.display = "block";
    // body.style.backgroundColor = 
});

closeMenu.addEventListener("click", () => {
    menu.style.display = "none";
    closeMenu.style.display = "none";
    mobileMenu.style.display = "block";
})