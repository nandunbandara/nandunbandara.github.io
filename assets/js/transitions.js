/**
 * Created by nandunb on 9/2/17.
 */
$(document).ready(function(){
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    var y = $(this).scrollTop();
    if(y > 300){
        $('#btt').fadeIn();
    }else{
        $('#btt').hide();
    }
});


$(document).scroll(function(){
    var y = $(this).scrollTop();
    if(y > 300){
        $('#btt').fadeIn();
    }else{
        $('#btt').fadeOut();
    }
});

// Create new file for page transitions
document.addEventListener('DOMContentLoaded', () => {
    gsap.from('nav', {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out'
    });

    gsap.from('.hero-content > *', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power4.out'
    });
});