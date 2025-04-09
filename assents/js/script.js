// Togle Menu Mobile
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('active');
});

// togle tema 
function toggleTheme(){
    document.body.classList.toggle('dark-theme');
}