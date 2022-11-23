const openNav = document.querySelector('#opennav');
const closeNav = document.querySelector('#closenav');
const navLinks = document.querySelector('.nav-links');

openNav.addEventListener('click', ()=>{
    navLinks.style.display = 'flex'
    openNav.style.display = 'none'
    closeNav.style.display = 'inline-block'
})

closeNav.addEventListener('click', ()=>{
    navLinks.style.display = 'none'
    openNav.style.display = 'inline-block'
    closeNav.style.display = 'none'
})