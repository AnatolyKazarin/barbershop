//Popup open close logic

var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

var link = document.querySelector('.user-list__login');
var popup = document.querySelector('.modal');
var close = popup.querySelector('.modal__button-close');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function(){
if (navMain.classList.contains('main-nav--closed')) {
  navMain.classList.remove('main-nav--closed');
  navMain.classList.add('main-nav--opened');
} else {
  navMain.classList.add('main-nav--closed');
  navMain.classList.remove('main-nav--opened');
  }
});

link.addEventListener('click', function(evt){
  evt.preventDefault();
  popup.classList.add('modal__show');
  navMain.classList.add('main-nav--closed');
  navMain.classList.remove('main-nav--opened');
});

close.addEventListener('click', function(evt){
  evt.preventDefault();
  popup.classList.remove('modal__show');
});

//Slider

var btnNext = document.querySelector('.reviews__next');
var btnPrev = document.querySelector('.reviews__prev');
var reviewsInputs = document.querySelectorAll('input[name="rev"]');
var advantagesInputs = document.querySelectorAll('input[name="advantages"]')

function switchReviews(){
  if(!reviewsInputs[reviewsInputs.length-1].checked){
    for(var i = 0; i < reviewsInputs.length; i++) {
      if(reviewsInputs[i].checked){
        reviewsInputs[++i].checked = true;
        i = reviewsInputs.length;
      }
    }
  } else {
    reviewsInputs[0].checked = true;
  }
}

function switchAdvantages(){
  if(!advantagesInputs[advantagesInputs.length-1].checked){
    for(var i = 0; i < advantagesInputs.length; i++) {
      if(advantagesInputs[i].checked){
        advantagesInputs[++i].checked = true;
        i = advantagesInputs.length;
      }
    }
  } else {
    advantagesInputs[0].checked = true;
  }
}

window.setInterval(switchReviews, 3000);
window.setInterval(switchAdvantages, 3000);

btnNext.addEventListener('click', function(){
  switchReviews();
});

btnPrev.addEventListener('click', function(){
  if(!reviewsInputs[0].checked){
    for(var i = 0; i < reviewsInputs.length; i++) {
      if(reviewsInputs[i].checked){
        reviewsInputs[--i].checked = true;
        i = reviewsInputs.length;
      }
    }
  } else {
    reviewsInputs[reviewsInputs.length-1].checked = true;
  }
})
