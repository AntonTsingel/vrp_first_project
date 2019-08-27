import template from './info.html';
import './info.css';
//import Handlebars from 'handlebars/dist/handlebars';

var generator = Handlebars.compile(template); // Function
var data = {};
var htmlContent = generator(data); // String: ololo with data
var elem = document.getElementById('info'); // output element: DOM Node
elem.innerHTML = htmlContent;

/*
console.log('info');
var source = document.getElementById("info-template"); // DOM Node
var template = source.innerHTML; // STRING
var generator = Handlebars.compile(template); // Function
var htmlContent = generator(); // String: template with data
var elem = document.getElementById('info'); // output element: DOM Node
elem.innerHTML = htmlContent;
*/
