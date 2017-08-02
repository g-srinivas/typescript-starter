import { Counter } from './counter';

describe('Immutable Counter', async () => {
  const counter = new Counter(1000);
  it('getValue', () => {
    expect(counter.getValue()).toBe(1000);
  });
  it('increment', () => {
    expect(counter.increment().getValue()).toBe(1001);
  });
  it('decrement', () => {
    expect(counter.decrement().getValue()).toBe(999);
  });
  it('getValue', () => {
    expect(new Counter().getValue()).toBe(0);
  });
});