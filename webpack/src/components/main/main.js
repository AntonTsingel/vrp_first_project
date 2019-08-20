console.log('main');
var source = document.getElementById("main-template"); // DOM Node
var template = source.innerHTML; // STRING
var generator = Handlebars.compile(template); // Function
var htmlContent = generator(); // String: template with data
var elem = document.getElementById('center-block'); // output element: DOM Node
elem.innerHTML = htmlContent;