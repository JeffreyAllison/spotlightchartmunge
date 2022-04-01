import { customers } from './data.js';
import { purchaseFrequencyCountMap } from './data-utils.js';

const countMap = purchaseFrequencyCountMap(customers);

const labels = Object.keys(countMap);

const data = {
  labels: labels,
  datasets: [
    {
      label: 'Purchase Frequency Amounts',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: Object.values(countMap)
    }
  ]
};

const config = {
  type: 'bar',
  data: data,
  options: {}
};

const myChart = new Chart(
  document.getElementById('myChart'),
  config
);