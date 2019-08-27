import template from './breadcrumbs.html';
import './breadcrumbs.css';
import Handlebars from 'handlebars/dist/handlebars';

var generator = Handlebars.compile(template); // Function
var data = {};
var htmlContent = generator(data); // String: template with data
var elem = document.getElementById('breadcrumbs'); // output element: DOM Node
elem.innerHTML = htmlContent;
