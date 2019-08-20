console.log('sidebar');
var source = document.getElementById("sidebar-template"); // DOM Node
var template = source.innerHTML; // STRING
var generator = Handlebars.compile(template); // Function
var htmlContent = generator(); // String: template with data
var elem = document.getElementById('content'); // output element: DOM Node
elem.innerHTML = htmlContent;