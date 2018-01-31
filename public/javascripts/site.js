$(document).ready(function () {
    updateWindow();

    $('.nav-item').click(function() {
        event.preventDefault();
        history.pushState(null, null, this.href);
        $('.activePage').removeClass('activePage').fadeOut(600, updateWindow);
    });

    $('.out').click(function() {
        event.preventDefault();
        newLocation = this.href;
        $('body').fadeOut(1000, newpage);
    });

});

function newpage(){
    window.location = newLocation;
}



function updateWindow(){
    var loc = window.location.href;
    var page = loc.split('p/')[1].split('?')[0];
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

