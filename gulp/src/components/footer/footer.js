var htmlContent = this.MyApp.templates.footer(); // String: template with data
var elem = document.getElementById('footer'); // output element: DOM Node
elem.innerHTML = htmlContent;
console.log('footer');