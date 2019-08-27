import template from "./feedback.html";
import "./feedback.css";
import "./img/close.png";
import Handlebars from "handlebars/dist/handlebars";
var generator = Handlebars.compile(template); // Function
var htmlContent = generator(); // String: template with data
var elem = document.getElementById("feedback"); // output element: DOM Node
elem.innerHTML = htmlContent;

(function(){
  (function feedbackStyle() {
    document.getElementById("feedback").style.display = "none";
  })()
    document.getElementById("feedback_link").addEventListener("click", show, false);
  function show() {
      document.getElementById("feedback").style.display = "block";
      document.getElementById("gray").style.display = "block";
    } 
    document.getElementById("feedback_close").addEventListener("click", hide, false);
  function hide() {
      document.getElementById("feedback").style.display = "none";
      document.getElementById("gray").style.display = "none";
    }
  })();