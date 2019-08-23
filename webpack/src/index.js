import _ from 'lodash';
import "./style.css";
console.log("styles");


import head from './components/header/header.hbs';
var data = {
    name: "Название компании",
    description: "Самая клёвая компания",
    phone: "+7(499) 777-77-77"
};
var generator = Handlebars.compile(head(data));
var elem = document.getElementById('header'); // output element: DOM Node
elem.innerHTML = generator();


import slide from './components/slider/slider.hbs';
var generator = Handlebars.compile(slide());
var elem = document.getElementById('slider'); // output element: DOM Node
elem.innerHTML = generator();


import breadcrumbs from './components/breadcrumbs/breadcrumbs.hbs';
var generator = Handlebars.compile(breadcrumbs());
var elem = document.getElementById('breadcrumbs'); // output element: DOM Node
elem.innerHTML = generator();


import sidebar from './components/sidebar/sidebar.hbs';
var generator = Handlebars.compile(sidebar());
var elem = document.getElementById('sidebar'); // output element: DOM Node
elem.innerHTML = generator();

import main from './components/main/main.hbs';
var generator = Handlebars.compile(main());
var elem = document.getElementById('main'); // output element: DOM Node
elem.innerHTML = generator();

import info from './components/info/info.hbs';
var generator = Handlebars.compile(info());
var elem = document.getElementById('info'); // output element: DOM Node
elem.innerHTML = generator();

import footer from './components/footer/footer.hbs';
var generator = Handlebars.compile(footer());
var elem = document.getElementById('footer'); // output element: DOM Node
elem.innerHTML = generator();

import feedback from './components/feedback/feedback.hbs';
var generator = Handlebars.compile(feedback());
var elem = document.getElementById('feedback'); // output element: DOM Node
elem.innerHTML = generator();


document.getElementById ("feedback").addEventListener("click", show, false);

function show(state)
{
  let  i = 1;
  i++;
  if (i % 2 == 0) {
  document.getElementById('feedback').style.display = 'none';
} else 
document.getElementById('feedback').style.display = 'block';
  show(state);
}





var slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
console.log('slideFunction');

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

  const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));

  function component() {
    const element = document.createElement('div');
    const button = document.createElement('button');
    const br = document.createElement('br');

    button.innerHTML = 'Click me and look at the console!';
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.appendChild(br);
    element.appendChild(button);

    // Note that because a network request is involved, some indication
    // of loading would need to be shown in a production-level site/app.
    button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
        const print = module.default;
        print();
    });

    return element;
}

document.body.appendChild(component());