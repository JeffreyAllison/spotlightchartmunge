/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { customers } from './data.js';
import { genderCountMap } from './data-utils.js';

const countMap = genderCountMap(customers);

const labels = Object.keys(countMap);

const data = {
  labels: labels,
  datasets: [
    {
      label: 'gender Amounts',
      backgroundColor: ['purple', 'red', 'green', 'blue', 'orange', 'pink', 'cyan', 'yellow'],
      borderColor: 'black',
      data: Object.values(countMap)
    }
  ]
};

const config = {
  type: 'pie',
  data: data,
  options: {}
};

// eslint-disable-next-line no-undef
const myChart3 = new Chart(
  document.getElementById('myChart3'),
  config
);