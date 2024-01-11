//Here we're importing items we'll need. You can add other imports here.
import { init } from "./util.js";
//The first function. Remove this.
const renderChart = (props) => {
  console.log("renderChart", props);
  const btn = document.querySelector("button");
  btn.onclick = function () {
    alert("You ran some JavaScript");
  };
};

window.renderChart = renderChart;
init(renderChart);