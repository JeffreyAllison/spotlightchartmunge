import { purchaseFrequencyCountMap } from '../data-utils.js';
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
