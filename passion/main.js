$(window).scroll(function() {
 
    var wScroll =$(this).scrollTop();
    
    if(wScroll > $('.feature').offset().top - ($(window).height() / 1.5)) {
        $('.feature .feature-item').each(function(i){
            
            setTimeout(function() {
            $('.feature .feature-item').eq(i).addClass('showing')
            }, 150 * (i+1));
        })
 }
});    
    