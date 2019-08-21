var data = {};
var htmlContent = this.MyApp.templates.breadcrumbs({}); // String: template with data
var elem = document.getElementById('breadcrumbs'); // output element: DOM Node
elem.innerHTML = htmlContent;
console.log('breadcrumbs');