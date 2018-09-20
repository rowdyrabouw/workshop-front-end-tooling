import sample from 'lodash/sample';

const options = ['welk', 'woord', 'zou', 'gekozen', 'worden', '??'];
const div = document.querySelector('div');

if (div) {
  div.innerHTML = sample(options);
}
