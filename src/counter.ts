export class Counter {
  private readonly count: number;
  constructor(count: number = 0) {
    this.count = count;
  }

  getValue() {
    return this.count;
  }

  increment() {
    return new Counter(this.count + 1);
  }

  decrement() {
    return new Counter(this.count - 1);
  }
}