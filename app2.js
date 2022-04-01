/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { customers } from './data.js';
import { coolFactorCountMap } from './data-utils.js';

const countMap = coolFactorCountMap(customers);

const labels = Object.keys(countMap);

const data = {
  labels: labels,
  datasets: [
    {
      label: 'Cool Factor Amounts',
      backgroundColor: 'black',
      borderColor: 'black',
      data: Object.values(countMap)
    }
  ]
};

const config = {
  type: 'line',
  data: data,
  options: {}
};

// eslint-disable-next-line no-undef
const myChart2 = new Chart(
  document.getElementById('myChart2'),
  config
);