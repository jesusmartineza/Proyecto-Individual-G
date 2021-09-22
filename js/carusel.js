//escribiendo codigo para el carusel con glider.js

window.addEventListener("load", function () {
    new Glider(document.querySelector(".carusel__lista"), {
        slidesToShow: 1,
        dots: ".carusel__indicadores",
        arrows: {
            prev: ".carusel__anterior",
            next: ".carusel__siguiente",
        },
    });
});
