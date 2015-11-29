$(document).ready( function() {
    $("#toggle").click(function() {
        $(this).toggleClass("on");
        $(".menu").slideToggle();
    });
});

