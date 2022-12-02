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
    },
    {
        title: 'Invernadero Escolar',
        imgRoute: './img/ganadores-1-4.png'
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
    },
    {
        title: 'Guía Metodológica',
        imgRoute: './img/ganadores-4-4.png'
    }],
    'Quinta-Edicion': [{
        title: 'Licencia para el manejo de las emociones',
        imgRoute: './img/ganadores-4-1.png'
    }, {
        title: 'La Música en los Procesos de Lectoescritura',
        imgRoute: './img/ganadores-4-2.png'
    }, {
        title: 'Proyecto R.I.E.',
        imgRoute: './img/ganadores-4-3.png'
    },
    {
        title: 'Acuaponía educativa integrando las TIC',
        imgRoute: './img/ganadores-4-4.png'
    },
    {
        title: 'Hurricane Engineering Center (HEC)',
        imgRoute: './img/ganadores-4-4.png'
    },
    {
        title: 'Think Like Me',
        imgRoute: './img/ganadores-4-4.png'
    }]
}

$(document).ready(function () {
    document.querySelectorAll('.ganadores-sec .container ul li').forEach(li => {
        li.addEventListener('click', function (e) {

            if ($(this).hasClass("active")) {
                return
            } else {
                $(".ganadores-sec .container ul li").removeClass("active");
                $($(this)).addClass("active");
            }
        });
    });

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
                    <a id='Primera-Edicion-1-1' onclick={expandGanadores('${index}','Primera-Edicion',this)}>
                        <img src='./img/ganadores-open-card/Boton/arrow.png' alt="">
                    </a>
                </div>
            </div>
            <div class='ganadores-card-body' style=' border-radius: 20px;background:url(${ganador.imgRoute}) no-repeat bottom,url("./img/fondo-cards.png") no-repeat bottom '></div>
        </div>
    `
    })
})

//Ganadores start

const limpiarGanadores = () => {
    const ganadoresContainer = document.getElementsByClassName('ganadores-options');
    for (let i = 0; i < ganadoresContainer.length; i++) {
        ganadoresContainer[i].classList.remove('ganadores-options-active');
    }
}

const expandGanadores = (index, el, element) => {
    if (el == 'Primera-Edicion') {
        if (index == 0) {
            document.getElementById('ganadores-header-download').setAttribute('href', './files/premio_biblioteca_virtual.pdf')
            document.getElementById('ganadores-modal-video').setAttribute('src', 'https://drive.google.com/file/d/1VQk_GdRUlojHhu4SkVlZG91agtCer0Gz/preview')
            document.getElementById('ganadores-title-modal').innerHTML = 'Biblioteca Virtual'
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
            document.getElementById('ganadores-modal-video').setAttribute('src', 'https://drive.google.com/file/d/11F8gE12rWyX1ZF0gMj-PCo_7IYEK9V-y/preview')
            document.getElementById('ganadores-title-modal').innerHTML = 'Fomento de la lectura con la Creatividad'
            document.getElementById('ganadores-modal-p').innerHTML = `
                <strong>Elaborado por:</strong> 
                Yaneris Carrasco
                Marcily Montás
                <strong>Instituto Politécnico Hainamosa</strong>`;

        }

        if (index == 2) {
            document.getElementById('ganadores-header-download').setAttribute('href', './files/premio_innovacion_matematica.pdf')
            document.getElementById('ganadores-modal-img').setAttribute('src', './img/ganadores-1-3.png')
            document.getElementById('ganadores-modal-video').setAttribute('src', 'https://drive.google.com/file/d/1Tg0waKci9tbAbiJV-ULLDFkf0UK2CpEM/preview')
            document.getElementById('ganadores-title-modal').innerHTML = 'Innovación y Diversificación de las Matemáticas'
            document.getElementById('ganadores-modal-p').innerHTML = `
            <strong>Elaborado por:</strong>
            Waly Rodríguez
            <strong>Politécnico El Ave María </strong>`;

        }

        if (index == 3) {
            document.getElementById('ganadores-header-download').setAttribute('href', './files/IE.pdf')
            document.getElementById('ganadores-modal-img').setAttribute('src', './img/ganadores-1-4.png')
            document.getElementById('ganadores-modal-video').setAttribute('src', 'https://drive.google.com/file/d/1TZSw_6_Ve0kqs9sU0FrUE3UCqXESNs1J/preview')
            document.getElementById('ganadores-title-modal').innerHTML = 'Invernadero Escolar'
            document.getElementById('ganadores-modal-p').innerHTML = `
            <strong>Elaborado por:</strong>
            Dorka Contreras
            Laura Corporán
            Martha Vicioso
            <strong>Politécnico San José (S.D.)</strong>`;

        }
    }

    if (el == 'Segunda-Edicion') {
        if (index == 0) {
            document.getElementById('ganadores-header-download').setAttribute('href', './files/MLQA.pdf')
            document.getElementById('ganadores-title-modal').innerHTML = 'Mira lo que Aprendí'
            document.getElementById('ganadores-modal-video').setAttribute('src', 'https://drive.google.com/file/d/13W_bu4djcVehMFqKx7TIz_Obf3x3VEG1/preview')
            document.getElementById('ganadores-modal-img').setAttribute('src', './img/ganadores-2-1.png')
            document.getElementById('ganadores-modal-p').innerHTML = `
                    <strong>Elaborado por:</strong>
                    Sely Perdomo
                    Juana Méndez
                    Katty Tejada
                    <strong>Politécnico San José (Santo Domingo)</strong>`;
        }

        if (index == 1) {
            document.getElementById('ganadores-header-download').setAttribute('href', './files/VG.pdf')
            document.getElementById('ganadores-title-modal').innerHTML = 'Variabilidad Genética y Crianza de Conejos'
            document.getElementById('video-container').style.display = 'none'
            document.getElementById('ganadores-modal-p').style.width = '100%'
            document.getElementById('ganadores-modal-img').setAttribute('src', './img/ganadores-2-2.png')
            document.getElementById('ganadores-modal-p').innerHTML = `
                    <strong>Elaborado por:</strong> 
                    Ángel Cuevas
                    <strong>Liceo Científico Dr. Miguel Canela Lázaro (Hermanas Mirabal)</strong>`;

        }
    }

    if (el == 'Tercera-Edicion') {
        if (index == 0) {
            document.getElementById('ganadores-header-download').setAttribute('href', './files/CEN.pdf')
            document.getElementById('ganadores-modal-video').setAttribute('src', 'https://drive.google.com/file/d/1kBzrkew9Ml3kMC3fKUQhe_FBxN8ywWW-/preview')
            document.getElementById('ganadores-title-modal').innerHTML = 'CEN Makerspace'
            document.getElementById('ganadores-modal-img').setAttribute('src', './img/ganadores-3-1.png')
            document.getElementById('ganadores-modal-p').innerHTML = `
                <strong>Elaborado por:</strong>
                Rafel Espín
                Hilda Karina Abreu
                <strong>Colegio Escuela Nueva (Santo Domingo)</strong>`;
        }

        if (index == 1) {
            document.getElementById('ganadores-header-download').setAttribute('href', './files/CQL.pdf')
            document.getElementById('ganadores-modal-video').setAttribute('src', 'https://drive.google.com/file/d/1hxDo8N8pbn9La4Zd2Tb0psAQjnoNcqxp/preview')
            document.getElementById('ganadores-title-modal').innerHTML = 'CQL: Cálculo de la química para la limpieza'
            document.getElementById('ganadores-modal-img').setAttribute('src', './img/ganadores-3-2.png')
            document.getElementById('ganadores-modal-p').innerHTML = `
        <strong>Elaborado por:</strong> 
        Junior Radhamés Sánchez Vásquez
        Ángela María Díaz Díaz
        <strong>Instituto Agronómico y Técnico Salesiano (La Vega)</strong>`;

        }

        if (index == 2) {
            document.getElementById('ganadores-header-download').setAttribute('href', './files/LUDUM.pdf')
            document.getElementById('ganadores-modal-video').setAttribute('src', 'https://drive.google.com/file/d/1RrUZeRbWvn5jzSyQ7hs0NeXrwz8AQMQg/preview')
            document.getElementById('ganadores-title-modal').innerHTML = 'LUDUM'
            document.getElementById('ganadores-modal-img').setAttribute('src', './img/ganadores-3-4.png')
            document.getElementById('ganadores-modal-p').innerHTML = `
        <strong>Elaborado por:</strong>
        Mariela Polanco Polanco
        Brenda Batista Rosario
        Eliana Francisco Cuello        
        <strong>Instituto Politécnico María de la Altagracia de Villa Duarte (Santo Domingo)</strong>`;

        }

    }

    if (el == 'Cuarta-Edicion') {
        if (index == 0) {
            document.getElementById('ganadores-header-download').setAttribute('href', './files/Proyecto Dron.pdf')
            document.getElementById('ganadores-title-modal').innerHTML = 'Proyecto Dron';
            document.getElementById('video-container').style.display = 'none'
            document.getElementById('ganadores-modal-p').style.width = '100%'
            document.getElementById('ganadores-modal-img').setAttribute('src', './img/ganadores-4-1.png')
            document.getElementById('ganadores-modal-p').innerHTML = `
            <strong>Elaborado por:</strong>
            José Enrique Ulloa Ferreira
            <strong>Centro de Excelencia Lic. Científico Dr. Miguel Canela</strong>`;
        }

        if (index == 1) {
            document.getElementById('ganadores-header-download').setAttribute('href', './files/me.pdf')
            document.getElementById('video-container').style.display = 'none'
            document.getElementById('ganadores-modal-p').style.width = '100%'
            document.getElementById('ganadores-title-modal').innerHTML = 'La Meteorología en la educación';
            document.getElementById('ganadores-modal-img').setAttribute('src', './img/ganadores-4-2.png')
            document.getElementById('ganadores-modal-p').innerHTML = `
            <strong>Elaborado por:</strong> 
            Eduardo Ventura Muñoz
            <strong>Colegio San Judas Tadeo</strong>`;
        }

        if (index == 2) {
            document.getElementById('ganadores-header-download').setAttribute('href', './files/ta.pdf')
            document.getElementById('ganadores-title-modal').innerHTML = 'Techos Acuápticos';
            document.getElementById('video-container').style.display = 'none'
            document.getElementById('ganadores-modal-p').style.width = '100%'
            document.getElementById('ganadores-modal-img').setAttribute('src', './img/ganadores-4-3.png')
            document.getElementById('ganadores-modal-p').innerHTML = `
            <strong>Elaborado por:</strong>
            Jaribell Tavares Goris
            Alessio Puglisi        
            <strong>Politécnico ITLA</strong>`;

        }
        if (index == 3) {
            document.getElementById('ganadores-header-download').setAttribute('href', './files/gm.pdf')
            document.getElementById('ganadores-title-modal').innerHTML = 'Guía Metodológica';
            document.getElementById('video-container').style.display = 'none'
            document.getElementById('ganadores-modal-p').style.width = '100%'
            document.getElementById('ganadores-modal-img').setAttribute('src', './img/ganadores-4-4.png')
            document.getElementById('ganadores-modal-p').innerHTML = `
            <strong>Elaborado por:</strong>
            Lauristely Peña Solano 
            María del Mar González Tejera        
            <strong>Secundaria Babeque</strong>`;
        }

    }

    if (el == 'Quinta-Edicion') {
        if (index == 0) {
            document.getElementById('ganadores-header-download').setAttribute('href', './files/Proyecto Dron.pdf')
            document.getElementById('ganadores-title-modal').innerHTML = 'Licencia para el manejo de las emociones';
            document.getElementById('video-container').style.display = 'none'
            document.getElementById('ganadores-modal-p').style.width = '100%'
            document.getElementById('ganadores-modal-img').setAttribute('src', './img/ganadores-4-1.png')
            document.getElementById('ganadores-modal-p').innerHTML = `
            <strong>Elaborado por:</strong>
            Carolina Aimee Troncoso Veloz,
            Kaherine Marlene Belliard De Jesús y 
            Sarah Nicole Sosa Lockward Colegio del Apostolado
            <strong>Centro de Excelencia Lic. Científico Dr. Miguel Canela</strong>`;
        }

        if (index == 1) {
            document.getElementById('ganadores-header-download').setAttribute('href', './files/me.pdf')
            document.getElementById('video-container').style.display = 'none'
            document.getElementById('ganadores-modal-p').style.width = '100%'
            document.getElementById('ganadores-title-modal').innerHTML = 'La Música en los Procesos de Lectoescritura';
            document.getElementById('ganadores-modal-img').setAttribute('src', './img/ganadores-4-2.png')
            document.getElementById('ganadores-modal-p').innerHTML = `
            <strong>Elaborado por:</strong> 
            María Estefany Vásquez Música, 
            Yoenmy Valerio y Jenniffer Reyes Instituto Iberia
            <strong>Colegio San Judas Tadeo</strong>`;
        }

        if (index == 2) {
            document.getElementById('ganadores-header-download').setAttribute('href', './files/ta.pdf')
            document.getElementById('ganadores-title-modal').innerHTML = 'Proyecto R.I.E.';
            document.getElementById('video-container').style.display = 'none'
            document.getElementById('ganadores-modal-p').style.width = '100%'
            document.getElementById('ganadores-modal-img').setAttribute('src', './img/ganadores-4-3.png')
            document.getElementById('ganadores-modal-p').innerHTML = `
            <strong>Elaborado por:</strong>
            Junior Radhamés Sánchez Vásquez, 
            Ángela María Díaz Díaz y Luis Alfredo Fernandez Serrata Instituto Agronómico y Técnico Salesiano       
            <strong>Politécnico ITLA</strong>`;

        }
        if (index == 3) {
            document.getElementById('ganadores-header-download').setAttribute('href', './files/gm.pdf')
            document.getElementById('ganadores-title-modal').innerHTML = 'Hurricane Engineering Center (HEC)';
            document.getElementById('video-container').style.display = 'none'
            document.getElementById('ganadores-modal-p').style.width = '100%'
            document.getElementById('ganadores-modal-img').setAttribute('src', './img/ganadores-4-4.png')
            document.getElementById('ganadores-modal-p').innerHTML = `
            <strong>Elaborado por:</strong>
            Rafaela Belkis Hernández Peña De Rodríguez, 
            Alba Rosa Vásquez Delance y Jinny Crismely Ureña Vásquez 
            Instituto Politécnico Industrial de Santiago(IPISA)     
            <strong>Secundaria Babeque</strong>`;
        }
        if (index == 4) {
            document.getElementById('ganadores-header-download').setAttribute('href', './files/gm.pdf')
            document.getElementById('ganadores-title-modal').innerHTML = 'Think Like Me';
            document.getElementById('video-container').style.display = 'none'
            document.getElementById('ganadores-modal-p').style.width = '100%'
            document.getElementById('ganadores-modal-img').setAttribute('src', './img/ganadores-4-4.png')
            document.getElementById('ganadores-modal-p').innerHTML = `
            <strong>Elaborado por:</strong>
            Natalia María De Jesús Pereyra y Paola Anabel Lee Bera Sustituta Permanente St. Michael’s School   
            <strong>Secundaria Babeque</strong>`;
        }

    }
    new Modal(
        // Grab the modal element
        document.querySelector('.modal'),
        // Grab the element that triggers the modal
        element
    );
}

const onClickGanadores = (edicion) => {
    console.log(edicion);
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
                <div class='ganadores-open-card' onclick={expandGanadores('${index}','${edicion}',this)}>
                    <img src='./img/ganadores-open-card/Boton/arrow.png' alt="">
                </div>
            </div>
            <div class='ganadores-card-body' style='border-radius: 20px;background: url(${ganador.imgRoute}) no-repeat bottom,url("./img/fondo-cards.png") no-repeat bottom;'></div>
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