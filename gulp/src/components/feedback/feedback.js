console.log('feedback');
var source = document.getElementById("window"); // DOM Node
var template = source.innerHTML; // STRING
var generator = Handlebars.compile(template); // Function
var htmlContent = generator(); // String: template with data
var elem = document.getElementById('window'); // output element: DOM Node
elem.innerHTML = htmlContent;