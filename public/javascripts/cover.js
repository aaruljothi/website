$(document).ready(function () {
    $('body').fadeIn(600);

    $('#secondInfo').one(
        'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
        clickMe,
    );  
    
    $('a').click(function() {
        event.preventDefault();
        newLocation = this.href;
        $('body').fadeOut(1000, newpage);
    });

});

function clickMe(){
    $('.plinks').addClass('animated pulse');
}

function newpage(){
    window.location = newLocation;
}

