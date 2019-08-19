console.log('breadcrumbs');
var source = document.getElementById("breadcrumbs-template"); // DOM Node
var template = source.innerHTML; // STRING
var generator = Handlebars.compile(template); // Function
var data = {};
var htmlContent = generator(data); // String: template with data
var elem = document.getElementById('breadcrumbs'); // output element: DOM Node
elem.innerHTML = htmlContent;