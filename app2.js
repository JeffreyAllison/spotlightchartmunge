import { customers } from './data.js';
import { coolFactorCountMap } from './data-utils.js';

const countMap = coolFactorCountMap(customers);

const labels = Object.keys(countMap);

const data = {
  labels: labels,
  datasets: [
    {
      label: 'Cool Factor Amounts',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: Object.values(countMap)
    }
  ]
};

const config = {
  type: 'line',
  data: data,
  options: {}
};

const myChart2 = new Chart(
  document.getElementById('myChart2'),
  config
);