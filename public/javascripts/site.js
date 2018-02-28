$(document).ready(function () {
    updateWindow();

    $('.nav-item').click(function() {
        event.preventDefault();
        history.pushState(null, null, this.href);
        $('body').removeClass('scroll').addClass('noscroll');
        $('.activePage').removeClass('slideInUp').addClass('slideOutDown');
        $('.activePage').removeClass('activePage').fadeOut(600, updateWindow);
    });

    $('.out').click(function() {
        event.preventDefault();
        newLocation = this.href;
        $('body').fadeOut(600, newpage);
    });


});

function newpage(){
    window.location = newLocation;
}

function updateWindow(){
    var loc = window.location.href;
    var page = loc.split('p/')[1].split('?')[0];
    $('.nav-item').each(function(){
        $(this).removeClass('active');
        if (this.href.indexOf(page) != -1){
            $(this).addClass('active');
        }
    })
    if (loc.indexOf('?')!= -1){
        var possible_terms = loc.split('p/')[1].split('?')[1].split('&');
        var search_terms = {};
        for (var i=0; i < possible_terms.length; i++){
            var key = possible_terms[i].split('=')[0];
            search_terms[key] = possible_terms[i].split('=')[1];
        }
        updateSearch(page, search_terms);
    }
    $('#'+page).addClass('activePage').fadeIn(600);
    $('#'+page).one(animationEnd, afterPageLoad);
    $('.activePage').removeClass('slideOutDown').addClass('slideInUp');
    switch (page){
        case 'me':
            meEntrance();
            break;
        case 'exp':
            console.log('hello');
            $('#afrc_pics').carousel();
            break;
        default: 
            break; 
    }
}

function afterPageLoad(){
    $("body").removeClass('noscroll').addClass('scroll');
}



var ss;

function updateSearch(page, search){
    ss = search;
    switch (page){
        case 'exp':
            $('#v-pills-tab a[id="'+search.pos+'"]').tab('show');
            break;
        default: 
            return; 
    }
}

function meEntrance(){
    $('img').addClass('fadeInRight');
    $('.btn').addClass('fadeInLeft');
}

// See https://github.com/daneden/animate.css/issues/644
var animationEnd = (function(el) {
    var animations = {
      animation: 'animationend',
      OAnimation: 'oAnimationEnd',
      MozAnimation: 'mozAnimationEnd',
      WebkitAnimation: 'webkitAnimationEnd',
    };
  
    for (var t in animations) {
      if (el.style[t] !== undefined) {
        return animations[t];
      }
    }
  })(document.createElement('div'));
  
