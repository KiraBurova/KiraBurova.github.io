var menu = document.getElementsByClassName('menu')[0];

document.getElementById('burger').onclick = function (){
	this.classList.toggle('active');
	menu.classList.toggle('active');
}

var slides = document.querySelectorAll('.slider__slide'),
  currentSlide = 0,
  //slideInterval = setInterval(nextSlide, 2000),
  firstBtn = document.getElementById('one'),
  secondBtn = document.getElementById('two'),
  thirdBtn = document.getElementById('three');

function getAllSiblings(elem, filter) {
    var sibs = [];
    elem = elem.parentNode.firstChild;
    do {
    		if (elem.nodeType === 3) continue; // text node
        if (!filter || filter(elem)) sibs.push(elem);
    } while (elem = elem.nextSibling)
    return sibs;
}

function nextSlide() {
  slides[currentSlide].className = 'slider__slide';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].className = 'slider__slide active';
};

firstBtn.onclick = function() {
  var slide = getAllSiblings(slides[0]);
  slide.forEach(function(el){
    el.classList.remove('active');
  });
  slides[0].className = 'slider__slide active';
var result = getAllSiblings(this);
  result.forEach(function(el){
    el.classList.remove('active');
  })
  this.classList.add('active');

};
secondBtn.onclick = function() {
  var slide = getAllSiblings(slides[1]);
  slide.forEach(function(el){
    el.classList.remove('active');
  });
  slides[1].className = 'slider__slide active';
var result = getAllSiblings(this);
  result.forEach(function(el){
    el.classList.remove('active');
  })
  this.classList.add('active');
  
};
thirdBtn.onclick = function() {
 var slide = getAllSiblings(slides[2]);
  slide.forEach(function(el){
    el.classList.remove('active');
  });
  slides[2].className = 'slider__slide active';
var result = getAllSiblings(this);
  result.forEach(function(el){
    el.classList.remove('active');
  })
  this.classList.add('active');
};