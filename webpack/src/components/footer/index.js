import template from './footer.html';
import './footer.css';
import './img/company.png';
import Handlebars from 'handlebars/dist/handlebars';


var generator = Handlebars.compile(template); // Function
var data = {
    company_name: "2012-2013 ЗАО «Компания»",
    company_email: "info@name.ru‎",
    main_page: "Главная",
    catalog_page: "Каталог",
    delivery_page: "Доставка и оплата",
    price_list_page: "Прайс-лист",
    contacts_page: "Контакты",
    site_development: "Разработка сайта",
    company_fullname:"компания «Пиксель Плюс»‎"
}
var htmlContent = generator(data); // String: template with data
var elem = document.getElementById('footer'); // output element: DOM Node
elem.innerHTML = htmlContent;