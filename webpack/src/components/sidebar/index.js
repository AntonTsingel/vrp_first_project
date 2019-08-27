import template from './sidebar.html';
import './sidebar.css';
import './img/excel.png';
import Handlebars from 'handlebars/dist/handlebars';

var generator = Handlebars.compile(template); // Function
var htmlContent = generator(); // String: template with data
var elem = document.getElementById('sidebar'); // output element: DOM Node
elem.innerHTML = htmlContent;