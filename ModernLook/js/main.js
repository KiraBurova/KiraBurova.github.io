$(document).ready( function() {
    $("#toggle").click(function() {
        $(this).toggleClass("on");
        $(".menu").slideToggle();
    });
});

var wScroll = this.pageYOffset;
var figures = document.querySelectorAll('.about .person-1');

  function showPic(i) {
    setTimeout(function(){
      figures[i].classList.add('showing');
    }, (700 * (Math.exp(i * 0.14)) - 700));
  }

  if(wScroll > document.querySelector('.about').scrollHeight + document.body.scrollTop - (window.innerHeight / 0.5)) {

    for(var i = 0; i < figures.length; i++) {
      showPic(i);
    }

  }
