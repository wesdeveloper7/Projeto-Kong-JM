







const bntMobile = document.getElementById('btn-mobile');

function toggleMenu(){
    
const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

bntMobile.addEventListener('click', toggleMenu);
