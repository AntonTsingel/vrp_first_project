console.log('info');
var source = document.getElementById("info-template"); // DOM Node
var template = source.innerHTML; // STRING
var generator = Handlebars.compile(template); // Function
var htmlContent = generator(); // String: template with data
var elem = document.getElementById('info'); // output element: DOM Node
elem.innerHTML = htmlContent;