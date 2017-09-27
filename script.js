var owl = $('.owl-carousel');
owl.owlCarousel({
    items:8,
    loop:true,
    margin:0,
    autoplay:true,
    autoplayTimeout:4500,
    autoplayHoverPause:true
});

$(function() {
    $(".page-widget").click(function() {
        $(".page-widget").removeClass("active-page-widget");  
        $(".page-widget").addClass("deactive-page-widget");       
        $(this).toggleClass("active-page-widget deactive-page-widget");
    })


    $(".button-more").click(function() {
    	$(".fa-arrow-right").toggleClass("fa-arrow-up");
    	$(".hiden-blogs").toggleClass("invisability");
    })


    $(".bars>.divdiv").click(function() {
        $(".bars-click").toggleClass("invisability");
    })


    $(".sort-tag").click(function() {
        $(".sort-tag").removeClass("active-sort-tag");  
        $(this).addClass("active-sort-tag");       
    })


    $(".modal-image").click(function() {
        $("#modal-image-paste").html($(this).html());  
    })


    $(".like-button").click(function() {
        var $like = parseInt($(this).children(".like-count").text());
        $like++;
        $(this).children(".like-count").text($like);
    })
});

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            ajax = JSON.parse(xhttp.responseText);
            exchangeRates();
        } 
    };
    xhttp.open("GET", "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5", true);
    xhttp.send(); 
}
window.addEventListener('load', loadDoc,true);
function exchangeRates() {
    var ru = ajax[1],
        ru_value = document.getElementById('ru_value'),
        ru_sale = document.getElementById('ru_sale'),
        ru_buy = document.getElementById('ru_buy'),
        eu = ajax[0],
        eu_value = document.getElementById('eu_value'),
        eu_sale = document.getElementById('eu_sale'),
        eu_buy = document.getElementById('eu_buy'),
        us = ajax[2],
        us_value = document.getElementById('us_value'),
        us_sale = document.getElementById('us_sale'),
        us_buy = document.getElementById('us_buy');
    ru_value.innerText = ru.ccy;
    ru_sale.innerText = ru.sale;
    ru_buy.innerText = ru.buy;
    eu_value.innerText = eu.ccy;
    eu_sale.innerText = eu.sale;
    eu_buy.innerText = eu.buy;
    us_value.innerText = us.ccy;
    us_sale.innerText = us.sale;
    us_buy.innerText = us.buy;
}

    (function() {
        var first = document.getElementById('firstSelect'),
            second = document.getElementById('secondSelect');
        first.onchange = function(){ second.selectedIndex = this.selectedIndex; };
        second.onchange = function(){ first.selectedIndex = this.selectedIndex; };
    })();
