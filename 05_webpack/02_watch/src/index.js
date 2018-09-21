import sample from "lodash/sample";

const options = ["which", "word", "will", "be", "chosen", "??"];
const div = document.querySelector("div");

if (div) {
  div.innerHTML = sample(options);
}
