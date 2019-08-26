//const template = 'evvwvwef</h1<h1>vv>';
import template from './header.html';
import './header.css';
import Handlebars from 'handlebars/dist/handlebars';

var generator = Handlebars.compile(template); // Function
/*var data = {
    name: "Название компании",
    description: "Самая клёвая компания",
    phone: "+7(499) 777-77-77"
};*/
var data = {};
var htmlContent = generator(data); // String: template with data
var elem = document.getElementById('header'); // output element: DOM Node

