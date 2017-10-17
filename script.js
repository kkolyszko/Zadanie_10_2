$(function () {
    var carouselList = $("#carousel ul");
    setInterval(changeSlide, 3000);
    
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
        
        lastItem.before(firstItem);
        carouselList.css({marginLeft:0});
    };
    
    $("#right").click(function() {
    changeSlide ();
});
    
    $("#left").click(function() {
        moveLastSlide();
        carouselList.animate({'marginLeft':+400}, 500);
});
    
});