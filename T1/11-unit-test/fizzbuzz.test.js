// fizzbuzz.test.js
const test = require('ava');
const fizzbuzz = require('./FizzBuzz');

test('FizzBuzz returns "fizz" for multiples of 3', t => {
  t.is(fizzbuzz(3), 'fizz');
});

test('FizzBuzz returns "buzz" for multiples of 5', t => {
  t.is(fizzbuzz(5), 'buzz');
});

test('FizzBuzz returns "fizzbuzz" for multiples of 15', t => {
  t.is(fizzbuzz(15), 'fizzbuzz');
});

test('FizzBuzz returns the number for non-multiples of 3 or 5', t => {
  t.is(fizzbuzz(7), '7');
});
