const headerMenu = document.querySelector('.header__menu')
const burgerMenu = document.querySelector('.burger-menu')

burgerMenu.addEventListener('click', () => {
    headerMenu.classList.toggle('show-menu')
})

const headerLink = document.querySelectorAll('.header__menu li a')
headerLink.forEach(element => element.addEventListener('click', () => {
    headerMenu.classList.remove('show-menu')
}))



$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        margin:100,
        responsive: {
            320:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
        }
    });
});
