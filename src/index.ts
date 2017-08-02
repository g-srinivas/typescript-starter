import { Range } from 'immutable';

export const factorial = (n: number): number => {
  console.assert(n >= 0);
  return Range(1, n + 1).reduce((x, y) => x * y, 1);
}

export const ncr = (n: number, r: number): number => {
  if(r === 0 || n === r){
   return 1;
  }
  return factorial(n) / (factorial(n - r) * factorial(r));
}

export const pascalLine = (n: number) => {
  console.assert(n > 0);
  return Range(0, n).map(x => ncr(n - 1, x));
}

export const isPrime = (n: number): boolean => {
  console.assert(n > 1);
  return Range(2, n).every(x =>  n % x !== 0)
}

export const primesUpTo = (n: number) => Range(2, n +1).filter(isPrime);
