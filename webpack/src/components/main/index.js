import template from './main.html';
import './main.css';
import './img/addtobasket_mini.png';
import './img/nophoto.png';

import Handlebars from 'handlebars/dist/handlebars';
var generator = Handlebars.compile(template); // Function
var data = {
    definition: 'Самый клевый чайник, который надо купить!',
    price: '1900 р.'
}
var htmlContent = generator(data); // String: template with data
var elem = document.getElementById('main'); // output element: DOM Node
elem.innerHTML = htmlContent;