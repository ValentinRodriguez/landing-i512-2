$(document).ready(function () {
    // SCROLL
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 90) {
            $(".navbar").addClass("navbar-shrink");
        } else {
            $(".navbar").removeClass("navbar-shrink");
        }
    })

    // VIDEO POPUP
    const videoSrc = $("#player-1").attr("src");
    $(".video-play-btn, .video-popup").on("click", function () {
        if ($(".video-popup").hasClass("open")) {
            $(".video-popup").removeClass("open");
            $("#player-1").attr("src", "")
        } else {
            $(".video-popup").addClass("open");
            if ($("#player-1").attr("src") == "") {
                $("#player-1").attr("src", "videoSrc")
            }
        }
    })

    //CAROUSEL FEATURES
    $('.features-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1,
            },
            // breakpoint from 480 up
            600: {
                items: 2,
            },
            // breakpoint from 768 up
            1000: {
                items: 3,
            }
        }
    });

})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const hover = (element, section) => {
    if (section == 1) {
        const element1 = document.getElementsByClassName('img-line-1-beneficios');
        element1[0].setAttribute('src', 'img/linea-1-avion-beneficios-section-green.png');
        const element2 = document.getElementsByClassName('img-line-2-beneficios');
        element2[0].setAttribute('src', 'img/linea-2-avion-beneficios-section-green.png');
        const element3 = document.getElementsByClassName('img-line-3-beneficios');
        element3[0].setAttribute('src', 'img/linea-3-avion-beneficios-section-green.png');
        const element4 = document.getElementsByClassName('img-avion-beneficios');
        element4[0].setAttribute('src', 'img/avion-beneficios-section-green.png');
    } else if (section == 2) {
        const element1 = document.getElementsByClassName('book-beneficios');
        element1[0].setAttribute('src', 'img/libro-beneficion-section-green.png');
    }
}

const unhover = (element, section) => {
    if (section == 1) {
        const element1 = document.getElementsByClassName('img-line-1-beneficios');
        element1[0].setAttribute('src', 'img/linea-1-avion-beneficios-section-white.png');
        const element2 = document.getElementsByClassName('img-line-2-beneficios');
        element2[0].setAttribute('src', 'img/linea-2-avion-beneficios-section-white.png');
        const element3 = document.getElementsByClassName('img-line-3-beneficios');
        element3[0].setAttribute('src', 'img/linea-3-avion-beneficios-section-white.png');
        const element4 = document.getElementsByClassName('img-avion-beneficios');
        element4[0].setAttribute('src', 'img/avion-beneficios-section-white.png');
    } else if (section == 2) {
        const element1 = document.getElementsByClassName('book-beneficios');
        element1[0].setAttribute('src', 'img/libro-beneficion-section-white.png');
    }
}

