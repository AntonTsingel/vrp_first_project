import template from './main.html';
import './main.css';

var generator = Handlebars.compile(template); // Function
var htmlContent = generator(); // String: template with data
var elem = document.getElementById('main'); // output element: DOM Node
elem.innerHTML = htmlContent;