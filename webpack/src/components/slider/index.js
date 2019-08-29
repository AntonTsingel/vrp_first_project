import Handlebars from 'handlebars/dist/handlebars';
import template from './slider.html';
import './slider.css';
import './img/slide1.png';
import './img/slide2.png';

var generator = Handlebars.compile(template);
var htmlContent = generator();
var elem = document.getElementById('slider'); 
elem.innerHTML = htmlContent;

document.getElementById('firstSlide').style.display = 'block';
document.getElementById('prev').addEventListener('click', showSlides1, false);
function showSlides1() {
  var slide = document.getElementById('firstSlide');
  var slide2 = document.getElementById('secondSlide');
  slide.style.display = 'block';
  slide2.style.display = 'none';
  }

document.getElementById('next').addEventListener('click', showSlides2, false);
function showSlides2() {
  var slide = document.getElementById('firstSlide');
  var slide2 = document.getElementById('secondSlide');
  slide.style.display = 'none';
  slide2.style.display = 'block';
  }
/*
var slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
document.getElementById('prev').addEventListener('click', plusSlides, false);
var n = -1;
function plusSlides(n) {
  showSlides((slideIndex += n));
}
document.getElementById('next').addEventListener('click', minusSlides, false);
 var n = 1;
function minusSlides(n) {
  showSlides((slideIndex += n));
}
*/

/*
// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('mySlides');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
 
  for (i = 0; i < slides.length; i++) {
    var slides = document.getElementsByClassName('mySlides');
    slides[i].style.display = 'none';
  }
  var slides = document.getElementsByClassName('mySlides');
  slides[slideIndex - 1].style.display = 'block';

}
console.log('slideFunction');
*/
