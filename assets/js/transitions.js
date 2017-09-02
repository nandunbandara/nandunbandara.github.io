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