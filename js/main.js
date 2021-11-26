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


// SECCION DE BENEFICIOS
function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
}

const transformBtnBeneficiosCometaIconToGreenHandler = () => {
    const element1 = document.getElementsByClassName('img-line-1-beneficios');
    element1[0].setAttribute('src', 'img/linea-1-avion-beneficios-section-green.png');
    const element2 = document.getElementsByClassName('img-line-2-beneficios');
    element2[0].setAttribute('src', 'img/linea-2-avion-beneficios-section-green.png');
    const element3 = document.getElementsByClassName('img-line-3-beneficios');
    element3[0].setAttribute('src', 'img/linea-3-avion-beneficios-section-green.png');
    const element4 = document.getElementsByClassName('img-avion-beneficios');
    element4[0].setAttribute('src', 'img/avion-beneficios-section-green.png');
}

const transformBtnBeneficiosCometaIconToWhitenHandler = () => {
    const element1 = document.getElementsByClassName('img-line-1-beneficios');
    element1[0].setAttribute('src', 'img/linea-1-avion-beneficios-section-white.png');
    const element2 = document.getElementsByClassName('img-line-2-beneficios');
    element2[0].setAttribute('src', 'img/linea-2-avion-beneficios-section-white.png');
    const element3 = document.getElementsByClassName('img-line-3-beneficios');
    element3[0].setAttribute('src', 'img/linea-3-avion-beneficios-section-white.png');
    const element4 = document.getElementsByClassName('img-avion-beneficios');
    element4[0].setAttribute('src', 'img/avion-beneficios-section-white.png');
}

const transformBtnBeneficiosBookIconToGreenHandler = () => {
    const element1 = document.getElementsByClassName('book-beneficios');
    element1[0].setAttribute('src', 'img/libro-beneficion-section-green.png');
}

const transformBtnBeneficiosBookIconToWhiteHandler = () => {
    const element1 = document.getElementsByClassName('book-beneficios');
    element1[0].setAttribute('src', 'img/libro-beneficion-section-green.png');
}

const hoverBtnBeneficios = (element, section) => {
    if (hasClass(element, 'btn-beneficios-section-active')) {
        return;
    }
    if (section == 1) {
        transformBtnBeneficiosCometaIconToGreenHandler();
    } else if (section == 2) {
        transformBtnBeneficiosBookIconToGreenHandler();
    }
}

const unHoverBtnBeneficios = (element, section) => {
    if (hasClass(element, 'btn-beneficios-section-active')) {
        return;
    }
    if (section == 1) {
        transformBtnBeneficiosCometaIconToWhitenHandler();
    } else if (section == 2) {
        transformBtnBeneficiosBookIconToGreenHandler();
    }
}

const ITEMS_CONTENT_BENEFICIOS_SECTION_1 = ['Asesoría técnica y el acompañamiento pedagógico.',
    'Participación en experiencia pedagógica.',
    'Publicación del proyecto y Diploma de Reconocimiento para los participantes.',
    'Contribución máxima de <strong>US$2,000</strong> atendiendo al presupuesto inicial del proyecto.']

const ITEMS_CONTENT_BENEFICIOS_SECTION_2 = ['Motivar la innovación desde la escuela.',
    'Promover el diseño de nuevas ideas en el contexto, la escuela, el aula y la comunidad.',
    'Apoyar a los docentes como los principales autores de la innovación educativa.',
    'Construir un arca de buenas prácticas que pueda ser compartida a nivel nacional.']

const populateListItems = (section) => {
    const items = document.getElementsByClassName('item-beneficios')
    for (let i = 0; i < items.length; i++) {
        items[i].children[1].innerHTML = section == 1 ? ITEMS_CONTENT_BENEFICIOS_SECTION_1[i] : ITEMS_CONTENT_BENEFICIOS_SECTION_2[i];
    }
}

const clickBtnBeneficios = (element, section) => {
    if (section == 1) {
        const btnSection2 = document.getElementById('section-2')
        btnSection2.classList.remove('btn-beneficios-section-active');
        element.classList.add('btn-beneficios-section-active');
        transformBtnBeneficiosCometaIconToGreenHandler();

        transformBtnBeneficiosBookIconToGreenHandler();
    } else if (section == 2) {
        element.classList.add('btn-beneficios-section-active');
        const btnSection1 = document.getElementById('section-1')
        btnSection1.classList.remove('btn-beneficios-section-active');
        transformBtnBeneficiosCometaIconToWhitenHandler();

        transformBtnBeneficiosBookIconToWhiteHandler();
    }

    populateListItems(section);

}
// SECCION DE BENEFICIOS