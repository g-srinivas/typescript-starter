import { is, List } from 'immutable';
import { factorial, isPrime, ncr, pascalLine, pascalTriangle, primesUpTo } from './index';

describe('factorial', async () => {
  it('factorial of negative numbers should throw error', () => {
    expect(() => factorial(-1)).toThrow();
  });
  it('factorial of 0 should be 1', () => {
    expect(factorial(0)).toBe(1);
  });
  it('factorial of 1 should be 1', () => {
    expect(factorial(1)).toBe(1);
  });
  it('factorial of 5 should be 120', () => {
    expect(factorial(5)).toBe(120);
  });
});

test('ncr', () => {
  expect(ncr(5, 0)).toBe(1);
  expect(ncr(5, 5)).toBe(1);
  expect(ncr(5, 4)).toBe(5);
});

describe('factorial', async () => {
  it('pascalLine fornegative numbers should throw error', () => {
    expect(() => pascalLine(-1)).toThrow();
  });
  it('1st pascalLine to be 1', () => {
    expect(is(pascalLine(1), List([1]))).toBeTruthy();
  });
  it('2nd pascalLine to be  1 1', () => {
    expect(is(pascalLine(2), List([1, 1]))).toBeTruthy();
  });
  it('3rd pascalLine to be  1 2 1', () => {
    expect(is(pascalLine(3), List([1, 2, 1]))).toBeTruthy();
  });
  it('4th pascalLine to be  1 3 3 1', () => {
    expect(is(pascalLine(4), List([1, 3, 3, 1]))).toBeTruthy();
  });
});

test('isPrime', () => {
  expect(isPrime(5)).toBeTruthy();
  expect(isPrime(4)).toBeFalsy();
});

test('primeNumbers', () => {
  expect(is(primesUpTo(5), List([2, 3, 5]))).toBe(true);
  expect(is(primesUpTo(10), List([2, 3, 5, 7]))).toBe(true);
});

test('pascalTriangle', () => {
  expect(List(pascalTriangle(1)
    .map(x => x.toList())))
    .toEqual(List([List([1])]));

  expect(List(pascalTriangle(2)
    .map(x => x.toList())))
    .toEqual(List([List([1]),
    List([1, 1])]));

  expect(List(pascalTriangle(4)
    .map(x => x.toList())))
    .toEqual(List([List([1]),
    List([1, 1]),
    List([1, 2, 1]),
    List([1, 3, 3, 1])]));
});



