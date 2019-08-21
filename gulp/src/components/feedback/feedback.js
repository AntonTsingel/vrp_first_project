var htmlContent = this.MyApp.templates.feedback(); // String: template with data
var elem = document.getElementById('feedback'); // output element: DOM Node
elem.innerHTML = htmlContent;
console.log('feedback');

function feedbackStyle() {
  document.getElementById('feedback').style.display = 'none';
}
feedbackStyle();

function show(state)
{
  document.getElementById('feedback').style.display = state;
  document.getElementById('gray').style.display = state;
}
