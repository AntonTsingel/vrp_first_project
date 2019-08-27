
import template from './header.html';
import './header.css';
import Handlebars from 'handlebars/dist/handlebars';

var generator = Handlebars.compile(template); 
var data = {
    name: "Название компании",
    description: "Самая клёвая компания",
    phone: "+7(499) 777-77-77"
};
var htmlContent = generator(data); 
var elem = document.getElementById('header'); 
elem.innerHTML = htmlContent;
