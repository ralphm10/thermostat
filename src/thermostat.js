class Thermostat {
  constructor(){
    this.temperature = 20;
    this.MINIUMUM_TEMP = 10;
  }
  getTemperature() {
    return this.temperature
  }
  increase() {
    return this.temperature += 1;
  }

  decrease() {
    this.temperature -= 1;

    if (this.temperature < this.MINIUMUM_TEMP) {
      this.temperature = 10;
      throw new Error("Minimum temperature: 10")
    }
      return this.temperature
  }
}
