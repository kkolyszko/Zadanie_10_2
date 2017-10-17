$(function () {
    var carouselList = $("#carousel ul");
    var myInterval = setInterval(changeSlide, 3000);
    
    function changeSlide () {
        carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
    };
    
    function moveFirstSlide () {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        
        lastItem.after(firstItem);
        carouselList.css({marginLeft:0});
    };
    
    function moveLastSlide () {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        carouselList.css({marginLeft:-400});
        lastItem.before(firstItem);
    };
    
    function refreashInterval () {
        clearInterval(myInterval);
        setTimeout(function(){setInterval(changeSlide, 3000)},5000);
    };

    $("#right").click(function() {
        changeSlide();
        refreashInterval();
    });
    
    $("#left").click(function() {
        moveLastSlide();
        carouselList.animate({'marginLeft':0}, 500);
        refreashInterval();
    });
    
});