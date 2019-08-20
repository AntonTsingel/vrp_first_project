console.log('paginator');
var source = document.getElementById("paginator-template"); // DOM Node
var template = source.innerHTML; // STRING
var generator = Handlebars.compile(template); // Function
var htmlContent = generator(); // String: template with data
var elem = document.getElementById('paginator'); // output element: DOM Node
elem.innerHTML = htmlContent;