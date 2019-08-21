var data ={};
var htmlContent = this.MyApp.templates.info({}); // String: template with data
var elem = document.getElementById('info'); // output element: DOM Node
elem.innerHTML = htmlContent;
console.log('info');