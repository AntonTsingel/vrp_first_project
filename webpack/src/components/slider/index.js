import Handlebars from 'handlebars/dist/handlebars';
import template from './slider.html';
import './slider.css';
import './img/slide1.png';
import './img/slide2.png';
var generator = Handlebars.compile(template);
var htmlContent = generator();
var elem = document.getElementById('slider'); 
elem.innerHTML = htmlContent;

var slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('mySlides');
  var dots = document.getElementsByClassName('dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';
}
console.log('slideFunction');

