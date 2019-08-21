var data = {};
var htmlContent = this.MyApp.templates.main(); // String: template with data
var elem = document.getElementById('main'); // output element: DOM Node
elem.innerHTML = htmlContent;
console.log('main');