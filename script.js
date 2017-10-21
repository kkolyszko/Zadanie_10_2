$(function () {
    var carouselList = $("#carousel ul");
    
    
    function startInterval () {
        var myInterval = setInterval(changeSlideRight, 3000);
    };
    
    startInterval();
    
    function changeSlideRight () {
        carouselList.animate({'marginLeft':-800}, 500, moveFirstSlide);
    };
    
    function changeSlideLeft () {
        carouselList.animate({'marginLeft':0}, 500, moveLastSlide);
    };
    
    function moveFirstSlide () {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        
        lastItem.after(firstItem);
        carouselList.css({marginLeft:-400});
    };
    
    function moveLastSlide () {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        
        carouselList.css({marginLeft:-400});
        firstItem.before(lastItem);
    };
    
    function refreashInterval () {
        clearInterval(myInterval);
        startInterval();
    };
    
    $("#right").mouseover(function() {
        clearInterval(myInterval);
        setTimeout(startInterval(), 5000);
    });
    
    $("#left").mouseover(function() {
        clearInterval(myInterval);
        setTimeout(startInterval(), 5000);
    });

    $("#right").click(function() {
        changeSlideRight();
        refreashInterval();
    });
    
    $("#left").click(function() {
        changeSlideLeft();
        refreashInterval();
    });
    
});