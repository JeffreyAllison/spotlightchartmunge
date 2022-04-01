export function purchaseFrequencyCountMap (customers) {

  const countMap = {};

  for (let customer of customers) {

    const frequency = customer.purchase_frequency;

    if (countMap[frequency]) {

      countMap[frequency]++;

    } else {

      countMap[frequency] = 1;
    }
  }
  return countMap;



}

export function coolFactorCountMap (customers) {

  const countMap = {};

  for (let customer of customers) {

    const frequency = customer.cool_factor;

    if (countMap[frequency]) {

      countMap[frequency]++;

    } else {

      countMap[frequency] = 1;
    }
  }

  return countMap;
}

export function genderCountMap (customers) {

  const countMap = {};

  for (let customer of customers) {

    const frequency = customer.gender;

    if (countMap[frequency]) {

      countMap[frequency]++;

    } else {

      countMap[frequency] = 1;
    }
  }

  return countMap;
}