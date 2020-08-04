class Thermostat {
  constructor(){
    this.temperature = 20
  }
  increase(number) {
    return this.temperature += number;
  }

  decrease(number) {
    this.temperature -= number;

    if (this.temperature < 10) {
      this.temperature = 10;
      throw new Error("Minimum temperature: 10")
    }
      return this.temperature
  }
}
