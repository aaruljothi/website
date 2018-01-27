$(document).ready(function () {
    updateWindow();
    $('body').fadeIn(600);

});

function updateWindow(){
    var loc = window.location.href; 
    var page = loc.split('p/')[1].split('?')[0];
    var possible_terms = loc.split('p/')[1].split('?')[1].split('&');
    var search_terms = [];
    for (var i=0; i < possible_terms.length; i++){
        search_terms.push({
            key: possible_terms[i].split('=')[0],
            value: possible_terms[i].split('=')[1],
        });
    }
    $('#' + page).attr('style', 'block');
    updateSearch(search_terms);
    return {
        page: page, 
        search: search_terms,
    };
}

function updateSearch(search){
    // change somethings
}

