console.log('footer');
var source = document.getElementById("footer-template"); // DOM Node
var template = source.innerHTML; // STRING
var generator = Handlebars.compile(template); // Function
var htmlContent = generator(); // String: template with data
var elem = document.getElementById('footer'); // output element: DOM Node
elem.innerHTML = htmlContent;