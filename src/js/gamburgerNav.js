let close = document.querySelector('.nav-close-icon');
let open = document.querySelector('.button-gamburger')
let menu = document.querySelector('.nav-main');
let navbar = document.getElementById('navbar-icon1');
let sticky = navbar.offsetTop;

close.addEventListener('click', function() {
    menu.classList.toggle('close');
    open.classList.toggle('nodisplay');
    navbar.classList.remove('button-gamburger_open')

});

open.addEventListener('click', function() {
    menu.classList.toggle('close');
    open.classList.toggle('nodisplay');
    navbar.classList.toggle('button-gamburger_open')
});
