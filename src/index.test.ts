import { is, List } from 'immutable';
import { factorial, isPrime, ncr, pascalLine, primesUpTo } from './index';

test('factorial', async () => {
  expect(factorial(0)).toBe(1);
  expect(factorial(1)).toBe(1);
  expect(factorial(5)).toBe(120);
});

test('ncr', () => {
  expect(ncr(5, 0)).toBe(1);
  expect(ncr(5, 5)).toBe(1);
  expect(ncr(5, 4)).toBe(5);
});


test('pascalLine', () => {
  expect(is(pascalLine(1), List([1]))).toBeTruthy();
  expect(is(pascalLine(2), List([1, 1]))).toBeTruthy();
  expect(is(pascalLine(3), List([1, 2, 1]))).toBeTruthy();
  expect(is(pascalLine(4), List([1, 3, 3, 1]))).toBeTruthy();
});

test('isPrime', () => {
  expect(isPrime(5)).toBeTruthy();
  expect(isPrime(4)).toBeFalsy();
});

test('primeNumbers in 5 to be [2,3,5]', () => {
  expect(is(primesUpTo(5), List([2, 3, 5]))).toBe(true);
  expect(is(primesUpTo(10), List([2, 3, 5, 7]))).toBe(true);
})


