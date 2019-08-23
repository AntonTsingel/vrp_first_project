
var source = document.getElementById("header-template"); // DOM Node
var template = source.innerHTML; // STRING
var generator = Handlebars.compile(template); // Function
var data = {// Object
    name: "Название компании",
    description: "Самая клёвая компания",
    phone: "+7(499) 777-77-77"
};
var htmlContent = generator(data); // String: template with data
var elem = document.getElementById('header'); // output element: DOM Node
elem.innerHTML = htmlContent;