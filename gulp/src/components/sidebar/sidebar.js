var data = {};
var htmlContent = this.MyApp.templates.sidebar(); // String: template with data
var elem = document.getElementById('sidebar'); // output element: DOM Node
elem.innerHTML = htmlContent;
console.log('sidebar');