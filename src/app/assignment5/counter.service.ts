export class CounterService {
  toInactiveCounter = 0;
  toActiveCounter = 0;

  addToInactive() {
    this.toInactiveCounter++;
    console.log(
      '🚀 ~ file: counter.service.ts:8 ~ CounterService ~ addToInactive ~ this.toInactiveCounter:',
      this.toInactiveCounter
    );
  }

  addToActive() {
    this.toActiveCounter++;
    console.log(
      '🚀 ~ file: counter.service.ts:8 ~ CounterService ~ addToInactive ~ this.toInactiveCounter:',
      this.toActiveCounter
    );
  }
}
