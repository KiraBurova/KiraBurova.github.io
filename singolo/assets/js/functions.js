$(function() {
	slider();
	fancyFilter();
	toggleNav();
	smoothScroll(300);
});

//Slider in the header
function slider() {
	$('.prev, .next, .slider-mobile-nav span').on('click', function(){
	    var $wrapper = $('.slider-wrapper');
	    var width = $wrapper.width();
	    var $this = $(this);

			$this.parent().find('span').removeClass('active');
    	$this.addClass('active');

	    $wrapper.animate({
	        scrollLeft: $this.hasClass('prev') ? '-='+width : '+='+width
	    },300);
	    return false;
	});
};


function fancyFilter() {
//gallery filtering
    // fancybox
    $(".fancybox").fancybox({
    });
// filter selector
    $(".filter").on("click", function () {
        var $this = $(this);
        // if we click the active tab, do nothing
        if ( !$this.hasClass("active") ) {
            $(".filter").removeClass("active");
            $this.addClass("active"); // set the active tab
            // get the data-rel value from selected tab and set as filter
            var $filter = $this.data("rel"); 
            // if we select view all, return to initial settings and show all
            $filter == 'all' ? 
                $(".fancybox")
                .attr("data-fancybox-group", "gallery")
                .not(":visible")
                .fadeIn() 
            : // otherwise
                $(".fancybox")
                .fadeOut(0)
                .filter(function () {
                    // set data-filter value as the data-rel value of selected tab
                    return $(this).data("filter") == $filter; 
                })
                // set data-fancybox-group and show filtered elements
                .attr("data-fancybox-group", $filter)
                .fadeIn(1000); 
        } // if
    }); // on
};
    // FORM VALIDATION
    function checkInfo() {
      var name = document.getElementById('name'),
      		email = document.getElementById('email');

      if(name.value == '') {
       	name.classList.add('error')
       }
			else {
				name.classList.remove('error');
			}
			if(email.value == "") {
				email.classList.add('error');
			}		
			else {
				email.classList.remove('error');
			}
};

    //TOGGLE NAV
    function toggleNav() {
      $('#burger').on('click', function(){
        $('nav ul').toggleClass('open');
      });
    };

//scroll smoothly

function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
};