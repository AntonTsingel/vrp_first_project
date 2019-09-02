
import template from './header.html';
import './header.css';
import Handlebars from 'handlebars/dist/handlebars';

var generator = Handlebars.compile(template); 
var data = {
    name: "Название компании",
    description: "Самая клёвая компания",
    phone: "+7(499) 777-77-77",
    feedback: "Обратная связь",
    main_page: "Главная",
    catalog_page: "Каталог",
    delivery_page: "Доставка и оплата",
    price_list_page: "Прайс-лист",
    contacts_page:"Контакты",

};
var htmlContent = generator(data); 
var elem = document.getElementById('header'); 
elem.innerHTML = htmlContent;
