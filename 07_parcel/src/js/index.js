import sample from "lodash/sample";
import "../css/styles.css";

const options = ["what", "word", "will", "be", "chosen", "??"];
const div = document.querySelector("div");

if (div) {
  div.innerHTML = sample(options);
}
