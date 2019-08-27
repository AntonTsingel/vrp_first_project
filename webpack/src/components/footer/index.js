import template from './footer.html';
import './footer.css';
import Handlebars from 'handlebars/dist/handlebars';


var generator = Handlebars.compile(template); // Function
var htmlContent = generator(); // String: template with data
var elem = document.getElementById('footer'); // output element: DOM Node
elem.innerHTML = htmlContent;

