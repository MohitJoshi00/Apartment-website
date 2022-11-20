



const hamburgerMenu = document.getElementById('hamburger');

const navListContainer = document.getElementById('navListContainer');

const navBtns = document.getElementById('navBtns');
let navItems =document.getElementById('navList');


hamburgerMenu.addEventListener('click', ()=>{

hamburgerMenu.classList.toggle('active')
navItems.classList.toggle('active')
navBtns.classList.toggle('active')


})