import sample from 'lodash/sample';

const options = ['blaat'];
const div = document.querySelector('div');

if (div) {
  div.innerHTML = sample(options);
}
