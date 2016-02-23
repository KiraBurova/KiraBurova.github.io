$(document).ready(function() {
      $("#owl-example").owlCarousel({
            items: 3,
            singleItem: true
        });
        $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            }
        }
    })
    $('.examples-of-work a').on("click", function(e) {
      var $this = $(this),
      $id = $this.attr('id'),
      $class = '.' + $('.about-' + $id).attr('class').replace('hide', '');

      $('.about-' + $id).removeClass('hide');
      $('div[class*=about]').not($class).addClass('hide');
});
});
