import template from './breadcrumbs.html';
//const template = 'evvwvwef</h1<h1>vv>';
import './breadcrumbs.css';
import handlebars from 'handlebars/dist/handlebars';

var generator = handlebars.compile(template); // Function
var data = {};
var htmlContent = generator(data); // String: template with data
var elem = document.getElementById('breadcrumbs'); // output element: DOM Node

