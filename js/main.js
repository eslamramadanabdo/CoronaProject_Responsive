// =================change background of navebar when scroll
$(window).scroll(function () {
    var x = document.getElementById('header')
    if ($(window).scrollTop() > 100) {

        x.classList.add('header-fixed');
    }
    else {
        x.classList.remove('header-fixed');
    }
});


//=================change the color of navbare and add icon of top ====================
$(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
        $('.content .arow').fadeIn();
    } else {
        $('.content .arow').fadeOut();
    }
});


let top2 = $('#arow');
top2.click(function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
})



// ====================counter ===================

let counters = document.querySelectorAll(".counter");
const speed = 100;
counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target / speed;


        if (count < target) {
            counter.innerText = (count + inc) | 0;
            setTimeout(updateCount, 7);

        } else {
            count.innerText = target;
        }
    }
    setTimeout(updateCount, 1000);
});
//============================================================

// =============about section===================================

$('.about-content-text .h1').slideDown(1000 , function(){

    $('.about-content-text .h4-bold').slideDown(1000 , function(){

        $('.about-content-text .h3').fadeIn(2000 , function(){
            $('.about-content-text .p1').slideDown(2000 , function(){
                $('.about-content-text .p2').slideDown(2000 );
            });
        });
    });

});


//==============================================================




// =============transmotion=========================================




//==================================================================





// ===========================================
// wow js plugens
new WOW().init();

// owlCarousel
$('.owl-carousel').owlCarousel({
    items: 4,
    loop: false,
    center: true,
    margin: 10,
    URLhashListener: true,
    autoplayHoverPause: true,
    startPosition: 'URLHash'
});

// smooth scroll
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 700
});

// jquery.nicescroll.min.js
// $("body").niceScroll({
//     cursorcolor: "aquamarine",
//     cursorwidth: "16px"
// });



//===============auto type script=================

var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    loop : true,
    typeSpeed: 40,
    backSpeed: 50,
    backDelay: 1000,
    startDelay: 1000,
  });


// ===============================================================



