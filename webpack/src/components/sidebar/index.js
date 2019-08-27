import template from './sidebar.html';
import './sidebar.css';
console.log('sidebar');
var generator = Handlebars.compile(template); // Function
var htmlContent = generator(); // String: template with data
var elem = document.getElementById('sidebar'); // output element: DOM Node
elem.innerHTML = htmlContent;