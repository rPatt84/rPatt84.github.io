console.log('hello world');


const dots = document.getElementById('sm-screen-dots');
const navUl = document.getElementById('nav-ul');
const mainCont = document.getElementById('main-container');


dots.addEventListener('click', () => {
    navUl.style.display = 'block';
    dots.style.display = 'none';
});

mainCont.addEventListener('click', () => {
    navUl.style.display = 'none';
    dots.style.display = 'block';

})


