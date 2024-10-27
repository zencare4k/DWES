// dateCompare.test.js
const test = require('ava');
const dateCompare = require('./datecompare');

test('Returns earlier and later date correctly', t => {
  const result = dateCompare('2023-01-01', '2023-06-01');
  t.is(result.startDate, '2023-01-01T00:00:00.000Z');
  t.is(result.endDate, '2023-06-01T00:00:00.000Z');
});

test('Compares date with current date if only one date is provided', t => {
  const result = dateCompare('2023-01-01');
  t.is(result.startDate, '2023-01-01T00:00:00.000Z');
});
