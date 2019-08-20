console.log('slider');
var source = document.getElementById("slider-template"); // DOM Node
var template = source.innerHTML; // STRING
var generator = Handlebars.compile(template); // Function
var htmlContent = generator(); // String: template with data
var elem = document.getElementById('slider'); // output element: DOM Node
elem.innerHTML = htmlContent;