var navItem = document.getElementsByClassName('navbar-item');
var scroll = document.getElementsByClassName('scroll')[0];

function controlScroll(value) {
    scroll.style.left = `calc(${value}*(-80vw))`;
}

document.getElementsByClassName('navbar-name')[0].addEventListener("click", function() {
    controlScroll(0);
});
document.getElementsByClassName('contact-button')[0].addEventListener("click", function() {
    controlScroll(3);
});


for (let index = 0; index < navItem.length; index++) {
    navItem[index].addEventListener("click", function() {
        controlScroll(index);
    });
}