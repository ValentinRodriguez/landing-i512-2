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
            // $("#player-1").attr("src", "")
        } else {
            $(".video-popup").addClass("open");
            if ($("#player-1").attr("src") == "") {
                $("#player-1").attr("src", "videoSrc")
            }
        }
    })

    // VIDEO POPUP
    const videoSrc2 = $("#player-2").attr("src");
    $(".video-play-btn-2, .video-popup-2").on("click", function () {
        if ($(".video-popup-2").hasClass("open")) {
            $(".video-popup-2").removeClass("open");
            // $("#player-2").attr("src", "")
        } else {
            $(".video-popup-2").addClass("open");
            if ($("#player-2").attr("src") == "") {
                $("#player-2").attr("src", "videoSrc2")
            }
        }
    })

    // VIDEO POPUP
    const videoSrc3 = $("#player-3").attr("src");
    $(".video-play-btn-3, .video-popup-3").on("click", function () {
        if ($(".video-popup-3").hasClass("open")) {
            $(".video-popup-3").removeClass("open");
            // $("#player-3").attr("src", "")
        } else {
            $(".video-popup-3").addClass("open");
            if ($("#player-3").attr("src") == "") {
                $("#player-3").attr("src", "videoSrc3")
            }
        }
    })

    // VIDEO POPUP
    const videoSrc4 = $("#player-4").attr("src");
    $(".video-play-btn-4, .video-popup-4").on("click", function () {
        if ($(".video-popup-4").hasClass("open")) {
            $(".video-popup-4").removeClass("open");
            // $("#player-4").attr("src", "")
        } else {
            $(".video-popup-4").addClass("open");
            if ($("#player-4").attr("src") == "") {
                $("#player-4").attr("src", "videoSrc4")
            }
        }
    })

    //CAROUSEL FEATURES
    $('.features-carousel').owlCarousel({
        // loop: true,
        margin: 1,
        nav: false,
        responsiveClass: true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1,
            },
            // breakpoint from 480 up
            480: {
                items: 2,
            },
            // breakpoint from 768 up
            768: {
                items: 3,
            }
        }
    });

    var owl = $('.owl-carousel');
    $('#customNextBtn').click(function () {
        owl.trigger('next.owl.carousel');
    })

    $('.goup').click(function () {
        $('html, body').animate({ scrollTop: 0 }, '300');
    })

    document.querySelectorAll('.ganadores-sec .container ul li').forEach(li => {
        li.addEventListener('click', function (e) {
            console.log(e.path);
            if ($(this).hasClass("active")) {
                return
            } else {
                $(".ganadores-sec .container ul li").removeClass("active");
                $($(this)).addClass("active");
            }
        });
    });

    $("#show-content-desktop-se-parte-transformacion-digital").click(function () {
        $("#content-desktop-se-parte-transformacion-digital").slideToggle(700);
        const el = document.getElementById("show-content-desktop-se-parte-transformacion-digital");
        if (el.innerText === "¡Leer más!") {
            el.innerText = "¡Leer menos!";
        } else {
            el.innerText = "¡Leer más!";
        }
    });


    $("#show-content-mobil-se-parte-transformacion-digital").click(function () {
        $("#content-mobil-se-parte-transformacion-digital").slideToggle(700);
        const el = document.getElementById("show-content-mobil-se-parte-transformacion-digital");
        if (el.innerText === "¡Leer más!") {
            el.innerText = "¡Leer menos!";
        } else {
            el.innerText = "¡Leer más!";
        }
    });

    setTimeout(() => {
        $("#dots2 > button:nth-child(1)").append("<p>1era edición</p>");
        $("#dots2 > button:nth-child(2)").append("<p>2da edición</p>");
        $("#dots2 > button:nth-child(3)").append("<p>3era edición</p>");
        $("#dots2 > button:nth-child(4)").append("<p>4ta edición</p>");
    }, 1000);

    const ganadores = {
        'Primera-Edicion': [{
            title: 'Biblioteca Virtual',
            imgRoute: './img/ganadores-1-1.png'
        }, {
            title: 'Fomento de la lectura con la Creatividad',
            imgRoute: './img/ganadores-1-2.png'
        }, {
            title: 'Innovación y Diversificación de las Matemáticas',
            imgRoute: './img/ganadores-1-3.png'
        }],
        'Segunda-Edicion': [{
            title: 'Mira lo que Aprendí',
            imgRoute: './img/ganadores-2-1.png'
        }, {
            title: 'Variabilidad Genética y Crianza de Conejos',
            imgRoute: './img/ganadores-2-2.png'
        }],
        'Tercera-Edicion': [{
            title: 'CEN Makerspace',
            imgRoute: './img/ganadores-3-1.png'
        }, {
            title: 'CQL: Cálculo de la química para la limpieza',
            imgRoute: './img/ganadores-3-2.png'
        }, {
            title: 'LUDUM',
            imgRoute: './img/ganadores-3-4.png'
        }],
        'Cuarta-Edicion': [{
            title: 'Proyecto DRON',
            imgRoute: './img/ganadores-4-1.png'
        }, {
            title: 'La Meteorología en la Educación',
            imgRoute: './img/ganadores-4-2.png'
        }, {
            title: 'Techos Acuapónicos',
            imgRoute: './img/ganadores-4-3.png'
        }]
    }
    const createGanadores = document.getElementById('ganadores-container')
    createGanadores.innerHTML = '';
    ganadores['Primera-Edicion'].forEach((ganador, index) => {
        createGanadores.innerHTML += `
        <div class="ganadores-card">
            <div class='ganadores-card-header'>
                <div class='ganadores-card-header-title'>
                    ${ganador.title}
                </div>
                <div class='ganadores-open-card'>
                    <a id='Primera-Edicion-1-1' onclick={expandGanadores('${index}',this,'Primera-Edicion-${index}')}>
                        <img src='./img/ganadores-open-card/Boton/arrow.png' alt="">
                    </a>
                </div>
            </div>
            <div class='ganadores-card-body' style='background: url(${ganador.imgRoute}) no-repeat bottom,url("./img/fondo-cards.png") no-repeat bottom '></div>
        </div>
    `
    })
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

const transformBtnBeneficiosCometaIconToGreenHandler = (isMobile) => {
    if (!isMobile) {
        const element1 = document.getElementsByClassName('img-line-1-beneficios');
        element1[0].setAttribute('src', 'img/linea-1-avion-beneficios-section-green.png');
        const element2 = document.getElementsByClassName('img-line-2-beneficios');
        element2[0].setAttribute('src', 'img/linea-2-avion-beneficios-section-green.png');
        const element3 = document.getElementsByClassName('img-line-3-beneficios');
        element3[0].setAttribute('src', 'img/linea-3-avion-beneficios-section-green.png');
        const element4 = document.getElementsByClassName('img-avion-beneficios');
        element4[0].setAttribute('src', 'img/avion-beneficios-section-green.png');
        return;
    }

    const element1 = document.getElementsByClassName('img-line-1-beneficios-mobile');
    element1[0].setAttribute('src', 'img/linea-1-avion-beneficios-section-green.png');
    const element2 = document.getElementsByClassName('img-line-2-beneficios-mobile');
    element2[0].setAttribute('src', 'img/linea-2-avion-beneficios-section-green.png');
    const element3 = document.getElementsByClassName('img-line-3-beneficios-mobile');
    element3[0].setAttribute('src', 'img/linea-3-avion-beneficios-section-green.png');
    const element4 = document.getElementsByClassName('img-avion-beneficios-mobile');
    element4[0].setAttribute('src', 'img/avion-beneficios-section-green.png');
}

const transformBtnBeneficiosCometaIconToWhitenHandler = (isMobile) => {
    if (!isMobile) {
        const element1 = document.getElementsByClassName('img-line-1-beneficios');
        element1[0].setAttribute('src', 'img/linea-1-avion-beneficios-section-white.png');
        const element2 = document.getElementsByClassName('img-line-2-beneficios');
        element2[0].setAttribute('src', 'img/linea-2-avion-beneficios-section-white.png');
        const element3 = document.getElementsByClassName('img-line-3-beneficios');
        element3[0].setAttribute('src', 'img/linea-3-avion-beneficios-section-white.png');
        const element4 = document.getElementsByClassName('img-avion-beneficios');
        element4[0].setAttribute('src', 'img/avion-beneficios-section-white.png');
        return;
    }
    //mobile section
    const element1 = document.getElementsByClassName('img-line-1-beneficios-mobile');
    element1[0].setAttribute('src', 'img/linea-1-avion-beneficios-section-white.png');
    const element2 = document.getElementsByClassName('img-line-2-beneficios-mobile');
    element2[0].setAttribute('src', 'img/linea-2-avion-beneficios-section-white.png');
    const element3 = document.getElementsByClassName('img-line-3-beneficios-mobile');
    element3[0].setAttribute('src', 'img/linea-3-avion-beneficios-section-white.png');
    const element4 = document.getElementsByClassName('img-avion-beneficios-mobile');
    element4[0].setAttribute('src', 'img/avion-beneficios-section-white.png');
}

const transformBtnBeneficiosBookIconToGreenHandler = (isMobile) => {
    if (!isMobile) {
        const element1 = document.getElementsByClassName('book-beneficios');
        element1[0].setAttribute('src', 'img/libro-beneficion-section-green.png');
        return;
    }
    const element1 = document.getElementsByClassName('book-beneficios-mobile');
    element1[0].setAttribute('src', 'img/libro-beneficion-section-green.png');
}

const transformBtnBeneficiosBookIconToWhiteHandler = (isMobile) => {
    if (!isMobile) {
        const element1 = document.getElementsByClassName('book-beneficios');
        element1[0].setAttribute('src', 'img/libro-beneficion-section-white.png');
        return;
    }
    const element1 = document.getElementsByClassName('book-beneficios-mobile');
    element1[0].setAttribute('src', 'img/libro-beneficion-section-white.png');
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
        transformBtnBeneficiosBookIconToWhiteHandler();
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

        transformBtnBeneficiosBookIconToWhiteHandler();
    } else if (section == 2) {
        element.classList.add('btn-beneficios-section-active');
        const btnSection1 = document.getElementById('section-1')
        btnSection1.classList.remove('btn-beneficios-section-active');
        transformBtnBeneficiosCometaIconToWhitenHandler();

        transformBtnBeneficiosBookIconToGreenHandler();
    }

    populateListItems(section);

}

const clickBtnBeneficiosMobile = (element, section) => {
    if (section == 1) {
        element.classList.add('btn-beneficios-section-active');
        const btnSection2 = document.getElementById('section-2-mobile')
        btnSection2.classList.remove('btn-beneficios-section-active');
        transformBtnBeneficiosCometaIconToGreenHandler(true);

        transformBtnBeneficiosBookIconToWhiteHandler(true);
    } else if (section == 2) {
        element.classList.add('btn-beneficios-section-active');
        const btnSection1 = document.getElementById('section-1-mobile')
        btnSection1.classList.remove('btn-beneficios-section-active');
        transformBtnBeneficiosCometaIconToWhitenHandler(true);

        transformBtnBeneficiosBookIconToGreenHandler(true);
    }

}


$(document).ready(function () {
    $('.sub-container-beneficios-mobile').height($('.sub-container-beneficios-mobile').height() + 80);
});

// SECCION DE BENEFICIOS


//Ganadores start

const ganadores = {
    'Primera-Edicion': [{
        title: 'Biblioteca Virtual',
        imgRoute: './img/ganadores-1-1.png'
    }, {
        title: 'Fomento de la lectura con la Creatividad',
        imgRoute: './img/ganadores-1-2.png'
    }, {
        title: 'Innovación y Diversificación de las Matemáticas',
        imgRoute: './img/ganadores-1-3.png'
    }],
    'Segunda-Edicion': [{
        title: 'Mira lo que Aprendí',
        imgRoute: './img/ganadores-2-1.png'
    }, {
        title: 'Variabilidad Genética y Crianza de Conejos',
        imgRoute: './img/ganadores-2-2.png'
    }],
    'Tercera-Edicion': [{
        title: 'CEN Makerspace',
        imgRoute: './img/ganadores-3-1.png'
    }, {
        title: 'CQL: Cálculo de la química para la limpieza',
        imgRoute: './img/ganadores-3-2.png'
    }, {
        title: 'LUDUM',
        imgRoute: './img/ganadores-3-4.png'
    }],
    'Cuarta-Edicion': [{
        title: 'Proyecto DRON',
        imgRoute: './img/ganadores-4-1.png'
    }, {
        title: 'La Meteorología en la Educación',
        imgRoute: './img/ganadores-4-2.png'
    }, {
        title: 'Techos Acuapónicos',
        imgRoute: './img/ganadores-4-3.png'
    }]
}

const limpiarGanadores = () => {
    const ganadoresContainer = document.getElementsByClassName('ganadores-options');
    for (let i = 0; i < ganadoresContainer.length; i++) {
        ganadoresContainer[i].classList.remove('ganadores-options-active');
    }
}

const expandGanadores = (index, el, id) => {
    if (index == 0) {
        document.getElementById('ganadores-header-download').setAttribute('href', './files/premio_biblioteca_virtual.pdf')
        document.getElementById('ganadores-modal-img').setAttribute('src', './img/ganadores-1-1.png')
        document.getElementById('ganadores-modal-img').setAttribute('src', './img/ganadores-1-1.png')
        document.getElementById('ganadores-modal-p').innerHTML = `
    <strong>Elaborado por:</strong>
    María Alejandra Ureña
    Socorro Méndez
    Erik Flores
    <strong>Politécnico Manuel Acevedo Serrano</strong>`;
    }

    if (index == 1) {
        document.getElementById('ganadores-header-download').setAttribute('href', './files/premio_fomento_creatividad.pdf')
        document.getElementById('ganadores-modal-img').setAttribute('src', './img/ganadores-1-2.png')
        document.getElementById('ganadores-modal-p').innerHTML = `
        <strong>Elaborado por:</strong> 
        Yaneris Carrasco
Marcily Montás
        <strong>Instituto Politécnico Hainamosa</strong>`;

    }

    if (index == 2) {
        document.getElementById('ganadores-header-download').setAttribute('href', './files/premio_innovacion_matematica.pdf')
        document.getElementById('ganadores-modal-img').setAttribute('src', './img/ganadores-1-3.png')
        document.getElementById('ganadores-modal-p').innerHTML = `
        <strong>Elaborado por:</strong>
        Waly Rodríguez

        <strong>Politécnico El Ave María </strong>`;

    }

    new Modal(
        // Grab the modal element
        document.querySelector('.modal'),
        // Grab the element that triggers the modal
        el
    );
}

const onClickGanadores = (edicion) => {
    const createGanadores = document.getElementById('ganadores-container')
    createGanadores.innerHTML = '';
    limpiarGanadores();

    document.getElementById(edicion).classList.add('ganadores-options-active');

    ganadores[edicion].forEach((ganador, index) => {
        createGanadores.innerHTML += `
        <div class="ganadores-card" id='${edicion}-${index}'>
            <div class='ganadores-card-header'>
                <div class='ganadores-card-header-title'>
                    ${ganador.title}
                </div>
                ${edicion == 'Primera-Edicion' ? `<div class='ganadores-open-card' onclick={expandGanadores('${index}',this,'${edicion}-${index}')}>
                    <img src='./img/ganadores-open-card/Boton/arrow.png' alt="">
                </div>` : ''}   
            </div>
            <div class='ganadores-card-body' style='background: url(${ganador.imgRoute}) no-repeat bottom,url("./img/fondo-cards.png") no-repeat bottom '></div>
        </div>
    `
    })
}

class Modal {
    constructor(modal, target) {
        this.isOpen = false;
        this.modal = modal;
        this.target = target;
        this.closeModal = modal.querySelectorAll('[data-close]');

        this.target.addEventListener("click", (e) => {
            if (this.isOpen) {
                return this.close();
            }
            return this.open();
        });
        this.closeModal.forEach(item => {
            item.addEventListener("click", (e) => {
                this.close();
            });
        });

    }

    animateIn() {
        this.modal.classList.add('animate-modal');
    }
    animateOut() {
        this.modal.classList.remove('animate-modal');
    }
    open() {
        this.modal.classList.add('show-modal');
        setTimeout(() => {
            this.animateIn();
        }, 10);
    }
    close() {
        this.animateOut();
        setTimeout(() => {
            this.modal.classList.remove('show-modal');
        }, 250);
    }
}

//Ganadores end