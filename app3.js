import { customers } from './data.js';
import { genderCountMap } from './data-utils.js';

const countMap = genderCountMap(customers);

const labels = Object.keys(countMap);

const data = {
  labels: labels,
  datasets: [
    {
      label: 'gender Amounts',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: Object.values(countMap)
    }
  ]
};

const config = {
  type: 'pie',
  data: data,
  options: {}
};

const myChart3 = new Chart(
  document.getElementById('myChart3'),
  config
);