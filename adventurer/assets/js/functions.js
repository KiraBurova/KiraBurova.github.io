$(function() {
  toggleNav();
  tabs()
});


  $(document).ready(function(){
    $('.slider').slick({
      infinite: true,
      speed: 700,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true
    });
  });


    function toggleNav() {
      $('#burger').on('click', function(){
        $('.header__menu-list').slideToggle();
      });
    };

   function tabs () {
    $('.about__tabs h4').on('click', function(){
      event.preventDefault();
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
    })
   } 
