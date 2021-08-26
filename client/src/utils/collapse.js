export default function handleCollapse() {
    const nav = document.querySelector('.menu');
    const navLinks = document.querySelectorAll('.menu li');

    console.log('H');
 
    nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
        link.style.animation ? link.style.animation = ''
        : link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .35}s`
    });
}