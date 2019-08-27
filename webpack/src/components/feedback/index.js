
import template from './feedback.html';
import './feedback.css';

var generator = Handlebars.compile(template); // Function
var htmlContent = generator(); // String: template with data
var elem = document.getElementById('feedback'); // output element: DOM Node
elem.innerHTML = htmlContent;

 function feedbackStyle() {
    document.getElementById('feedback').style.display = 'none';
  }
  feedbackStyle();
  
  function show(state)
  {
    document.getElementById('feedback').style.display = state;
    document.getElementById('gray').style.display = state;
  }
  show();