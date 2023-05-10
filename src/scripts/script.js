import $ from 'jquery';

// News
document.addEventListener('DOMContentLoaded', function() {
    new Splide('.splide', {
        type: 'slide',
        omitEnd: true,
        rewind: true,
        autoWidth: true,
        perMove: 1,
        autoplay: 'play',
        interval: 3000,
        speed: 1000,
        pauseOnHover: true,
        pauseonFocus: true,
        gap: '50px',
    }).mount();
});

// FAQ
$('.question-and-answer').click(function() {
    var answer = $(this).find(".answer");
    var arrow = $(this).find(".question-arrow");

    $('.answer').not(answer).slideUp(300);
    $('.question-arrow').not(arrow).removeClass('rotate-180');

    if ( answer.first().is( ":hidden" ) ) {
        answer.slideDown(300);
    } else {
        answer.slideUp(300);
    }
    arrow.toggleClass("rotate-180");
});


