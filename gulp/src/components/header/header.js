var data = {// Object
    name: "Название компании",
    description: "Самая клёвая компания",
    phone: "+7(499) 777-77-77"
};
var htmlContent = this.MyApp.templates.header(); // String: template with data
var elem = document.getElementById('header'); // output element: DOM Node
elem.innerHTML = htmlContent;
console.log('header');