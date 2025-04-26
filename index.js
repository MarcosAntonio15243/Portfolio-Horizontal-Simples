// Select elements
const navItems = document.querySelectorAll('.navbar-item');
const scrollContainer = document.querySelector('.scroll');
const navbarName = document.querySelector('.navbar-name');
const contactButton = document.querySelector('.contact-button');

// Function to control the scroll
function controlScroll(index) {
    if (scrollContainer) {
        scrollContainer.style.left = `calc(${index} * -80vw)`;
    }
}

// Event for the navbar name
if (navbarName) {
    navbarName.addEventListener('click', () => controlScroll(0));
}

// Event for the contact button
if (contactButton) {
    contactButton.addEventListener('click', () => controlScroll(3));
}

// Event for each navbar item
navItems.forEach((item, index) => {
    item.addEventListener('click', () => controlScroll(index));
});
