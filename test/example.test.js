import {
  purchaseFrequencyCountMap,
  coolFactorCountMap,
  genderCountMap
} from '../data-utils.js';
import { customers } from '../data.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
  //Arrange
  // Set up your arguments and expectations
  const expected = true;

  //Act 
  // Call the function you're testing and set the result to a const
  const actual = true;

  //Expect
  // Make assertions about what is expected versus the actual result
  expect.equal(actual, expected);
});

test('receives customer data and returns purchase frequency count map', (expect) => {

  const countMap = {
    'Daily': 142,
    'Monthly': 123,
    'Never': 123,
    'Often': 126,
    'Once': 107,
    'Seldom': 129,
    'Weekly': 122,
    'Yearly': 128

  };

  const expected = countMap;

  const actual = purchaseFrequencyCountMap(customers);

  expect.deepEqual(actual, expected);

});

test('receives customer data and returns cool factor count map', (expect) => {

  const countMap = {
    '1': 109,
    '2': 119,
    '3': 99,
    '4': 101,
    '5': 93,
    '6': 102,
    '7': 101,
    '8': 99,
    '9': 82,
    '10': 95

  };

  const expected = countMap;

  const actual = coolFactorCountMap(customers);

  expect.deepEqual(actual, expected);

});
