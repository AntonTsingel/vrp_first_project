import template from './info.html';
import './info.css';
import Handlebars from 'handlebars/dist/handlebars';

var generator = Handlebars.compile(template); // Function
var data = {
    info_first: "Компания «Пиксель Плюс»‎ существует более 6 лет, за это время мы принимали участие в разработке более чем 700сайтов, поэтому можем уверенно называть себя профессионалами. На данный момент наш коллектив состоит из более чем 30 сотрудников работающих в двух офисах в Москве и Зеленограде. Характерные для этого жанра мотивы: неразделенной любви,  ухода молодости, угасания души.",
    info_second: " Одним из основных направлений работ нашей компании является поисковое продвижение сайтов, на данный момент мы работаемс более чем 150 постоянными клиентами по более чем 11000 поисковым запросам. При этом в работе основной акцент мы делаемна качестве работ, а так же применяем собственные уникальные разработки в области SEO продвижения. На данный моментотдел SEO состоит из 9 человек под руководством ведущего специалиста, преимущественно работающих в нашем московскомофисе."
};
var htmlContent = generator(data); // String: ololo with data
var elem = document.getElementById('info'); // output element: DOM Node
elem.innerHTML = htmlContent;

/*
console.log('info');
var source = document.getElementById("info-template"); // DOM Node
var template = source.innerHTML; // STRING
var generator = Handlebars.compile(template); // Function
var htmlContent = generator(); // String: template with data
var elem = document.getElementById('info'); // output element: DOM Node
elem.innerHTML = htmlContent;
*/