import template from './header.html';
//const template = 'evvwvwef</h1<h1>vv>';
import './header.css';
import handlebars from 'handlebars/dist/handlebars';


var generator = handlebars.compile(template); // Function
var data = {
    name: "Название компании",
    description: "Самая клёвая компания",
    phone: "+7(499) 777-77-77"
};
var htmlContent = generator(data); // String: template with data
var elem = document.getElementById('header'); // output element: DOM Node

