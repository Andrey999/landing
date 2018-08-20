//mobile_menu
var mobileMenu = document.getElementById('mobile_menu');
var mobileNav = document.getElementById('mobile_nav');

mobileMenu.onclick = function() {
    mobileNav.classList.toggle('mobile_menu-active');
};













// slider
var leftBtn = document.getElementById('slider_left-btn');
var rightBtn = document.getElementById('slider_right-btn');
var slides = document.getElementsByClassName('slides');

for (let i = 0; i < slides.length; i++) {
    slides[i].style.zIndex = slides.length - 1;
}
// var currentSlide = 1;
// var left = 0;

rightBtn.onclick = function() {
    console.log('click');
    var activeEl = document.querySelector('.active');
    console.log(activeEl);
    if(activeEl.nextElementSibling) {
        activeEl.style.left = "-100%";
        activeEl.classList.remove('active');
        activeEl.nextElementSibling.classList.add('active');
    }
    };

    leftBtn.onclick = function() {
        console.log('click');
        var activeEl = document.querySelector('.active');
        if(activeEl.previousElementSibling) {
            activeEl.style.left = "0%";
            activeEl.classList.remove('active');
            activeEl.previousElementSibling.classList.add('active');
        }
    };




$(function() {

	// Custom JS
});
