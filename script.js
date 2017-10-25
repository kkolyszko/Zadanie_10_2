$(function () {
    var carouselList = $("#carousel ul");
    
    var myInterval;
    
    function startInterval () {
        myInterval = setInterval(changeSlideRight, 3000);
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
        setTimeout(startInterval(), 5000);
    };
    
    $("#right").mouseover(function() {
        refreashInterval();
    });
    
    $("#left").mouseover(function() {
        refreashInterval();
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