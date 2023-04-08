// hamburger menu
const menuButton = document.getElementById("menu-icon");
const menu = document.getElementById("menu");

menuButton?.addEventListener("click", () => {
    let list = menu.classList;
    if (list.contains("show-menu")) {
        list.remove("show-menu")
    } else {
        list.add("show-menu")
    }
})

// owlCarousel 
$(function () {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
        items: 1,
        margin: 10,
        loop: true,
        nav: true,
        autoplay: true
    });
});
