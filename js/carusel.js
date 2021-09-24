//escribiendo codigo para el carusel con glider.js

window.addEventListener("load", function () {
    new Glider(document.querySelector(".carusel__lista"), {
        slidesToShow: 2,
        draggable: true,
        arrows: {
            prev: ".carusel__anterior",
            next: ".carusel__siguiente",
        },
    });
});
