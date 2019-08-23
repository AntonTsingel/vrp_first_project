import _ from 'lodash';
import "./style.css";
console.log("styles");

import templ from './main.hbs';
console.log( templ());
console.log( templ({name:'webpack'}));

import head from './components/header/header.hbs';
var data = {
    name: "Название компании",
    description: "Самая клёвая компания",
    phone: "+7(499) 777-77-77"
};
console.log(head(data));
var template = head.innerHTML;
var generator = Handlebars.compile(head(data));
var htmlContent = generator();
var elem = document.getElementById('header'); // output element: DOM Node
elem.innerHTML = htmlContent;

/*
debugger;
document.body.append(div);
let div = document.createElement('div');
div.className = "alert";
div.innerHTML = htmlContent;
document.body.append(div);


var source = document.getElementById("header-template"); // DOM Node

var template = source.innerHTML; // STRING

var generator = Handlebars.compile(template); // Function
var data = {// Object
    name: "Название компании"
};
var htmlContent = generator(data); // String: template with data
var elem = document.getElementById('header'); // output element: DOM Node
elem.innerHTML = htmlContent;

//var source = document.getElementById("header-template"); // DOM Node
/*var template = headerr.innerHTML; // STRING
debugger;
var generator = Handlebars.compile(template); // Function
var data = {// Object
    name: "Название компании"
};
var htmlContent = generator(data); // String: template with data
var elem = document.getElementById('header'); // output element: DOM Node
elem.innerHTML = htmlContent;
*/

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

  const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));

  function component() {
    const element = document.createElement('div');
    const button = document.createElement('button');
    const br = document.createElement('br');

    button.innerHTML = 'Click me and look at the console!';
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.appendChild(br);
    element.appendChild(button);

    // Note that because a network request is involved, some indication
    // of loading would need to be shown in a production-level site/app.
    button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
        const print = module.default;
        print();
    });

    return element;
}

document.body.appendChild(component());