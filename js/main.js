$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:3,
        itemsDesktop:[1000,3],
        itemsDesktopSmall:[979,2],
        itemsTablet:[768,2],
        itemsMobile:[650,1],
        pagination:true,
        autoPlay:true
    })
});

$(document).ready(function() {
    var swiper1 = new Swiper('.s1', {
        // centeredSlides: true,
        breakpoints: {
            1040: {
            slidesPerView: 3,
            spaceBetween: 10
            },
            768: {
            slidesPerView: 2,
            spaceBetween: 30
            },
            640: {
            slidesPerView: 2,
            spaceBetween: 5
            },
            320: {
            slidesPerView: 2,
            spaceBetween: 5
            }
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination1',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

$(document).ready(function() {
    var swiper_center = true;
    if ($(window).width() <= 767) {
        swiper_center = true;
    }
    else {
        swiper_center = false;
    }
    var swiper2 = new Swiper('.s2', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: swiper_center,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true,
        },
        pagination: {
            el: '.swiper-pagination2',
            clickable: true,
        },
    });
});

new WOW().init();
$(function(){
    $('[data-toggle="popover"]').popover()
 });

    // https://script.google.com/macros/s/AKfycbzdf8AG4utXnyrIZRURWeDxV26Jk7mPdGZTI61cnAIYc0tJm0Hd/exec

function submitForm() {
    // Get the first form with the name
    // Usually the form name is not repeated
    // but duplicate names are possible in HTML
    // Therefore to work around the issue, enforce the correct index
    var frm = document.getElementsByName('contact-form')[0];
    frm.submit(); // Submit the form
    frm.reset();  // Reset all form data

    // Hide the form
    var form = document.getElementById("contact-form-toggle");
    form.style.display = "none";

    // Show info
    var info = document.getElementById("form-submitted-info");
    info.style.display = "block";
    
    return false; // Prevent page refresh
}

//Hamburger menu toggle
$(".navbar li a").click(function (event) {
// check if window is small enough so dropdown is created
var toggle = $(".navbar-toggler").is(":visible");
if (toggle) {
    $(".navbar-collapse").collapse('hide');
}
});


// collapse
jQuery('button').click( function(e) {
    jQuery('.collapse').collapse('hide');
});