import './components/header';
import './components/slider';
import './components/breadcrumbs';
import './components/sidebar';
import './components/main';
import './components/info';
import './components/footer';
import './common/css/main.css';
import './components/feedback';
import Handlebars from 'handlebars/dist/handlebars';
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));


/*
import _ from 'lodash';
import "./style.css";
console.log("styles");
import head from './components/header/header.hbs';

var data = {
    name: "Название компании",
    description: "Самая клёвая компания",
    phone: "+7(499) 777-77-77"
};

var generator = Handlebars.compile(head(data));
var elem = document.getElementById('header'); // output element: DOM Node
elem.innerHTML = generator();

*/