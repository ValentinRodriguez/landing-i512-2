$(document).ready(function () {
       // SCROLL
       $(window).on("scroll", function () {
        if ($(this).scrollTop() > 90) {
            $(".navbar").addClass("navbar-shrink");
        }else{
            $(".navbar").removeClass("navbar-shrink");
        }
    })

    // VIDEO POPUP
    const videoSrc = $("#player-1").attr("src");
    $(".video-play-btn, .video-popup").on("click", function () {
        if ($(".video-popup").hasClass("open")) {
            $(".video-popup").removeClass("open");
            $("#player-1").attr("src","")
        } else {
            $(".video-popup").addClass("open");
            if ($("#player-1").attr("src") == "") {
                $("#player-1").attr("src","videoSrc")                
            }
        }
    })

    //CAROUSEL FEATURES
    $('.features-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items : 1,
            },
            // breakpoint from 480 up
            600 : {
                items : 2,
            },
            // breakpoint from 768 up
            1000 : {
                items : 3,
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


document.getElementById("toggle").addEventListener("click", function () {

    var x = document.getElementById("collapsibleNavbar");
    if (x.className === "collapse navbar-collapse") {   
        x.classList.add("show");
    } else {
        x.classList.remove("show");
    }
});

