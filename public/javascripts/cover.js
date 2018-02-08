$(document).ready(function () {
    $('body').fadeIn(600);

    $('#divider').one(
        'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
        openup,
    );

    // $('#secondInfo').one(
    //     'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
    //     clickMe,
    // );  
    
    $('a').click(function() {
        event.preventDefault();
        newLocation = this.href;
        $('body').fadeOut(1000, newpage);
    });

});

function openup(){
    $('#name').attr('style','visibility:visible').addClass('bounceInDown');
    $('#secondInfo').attr('style','visibility:visible').addClass('bounceInUp');
}

function clickMe(){
    $('.plinks').addClass('animated pulse');
}

function newpage(){
    window.location = newLocation;
}

