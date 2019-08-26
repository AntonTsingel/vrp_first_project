/*console.log('feedback');
var source = document.getElementById("feedback-template"); // DOM Node
var template = source.innerHTML; // STRING
var generator = Handlebars.compile(template); // Function
var htmlContent = generator(); // String: template with data
var elem = document.getElementById('window'); // output element: DOM Node
elem.innerHTML = htmlContent;*/
import './feedback.html';
import './feedback.css';


function feedbackStyle() {
    document.getElementById('feedback').style.display = 'none';
  }
  feedbackStyle();
  
  function show(state)
  {
    document.getElementById('feedback').style.display = state;
    document.getElementById('gray').style.display = state;
  }