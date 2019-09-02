import template from './sidebar.html';
import './sidebar.css';
import './img/excel.png';
import Handlebars from 'handlebars/dist/handlebars';

var generator = Handlebars.compile(template); // Function
var data = {
    auto: "Автомобили",
    appliances: "Бытовая техника",
    microwaves: "Микроволновки",
    fridges: "Холодильники",
    Dishwashers: "Посудомоечные машины",
    teapots: "Чайники",
    mobile_tech: "Мобильная техника ",
    computers: "Компьютеры",
    clothes: "Одежда",
    property: "Недвижимость",
    price_list: "Прайс-лист"
}
var htmlContent = generator(data); // String: template with data
var elem = document.getElementById('sidebar'); // output element: DOM Node
elem.innerHTML = htmlContent;