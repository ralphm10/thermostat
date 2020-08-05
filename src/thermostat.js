class Thermostat {
  constructor(){
    this.temperature = 20;
    this.MINIUMUM_TEMP = 10;
    this.MAXIMUM_TEMP_POWER_SAVE = 25;
    this.MAXIMUM_TEMP = 32,
    this.powersaving = true;
  }
  getTemperature() {
    return this.temperature
  }
  increase() {
    this.temperature += 1;

    if (this.temperature > this.MAXIMUM_TEMP_POWER_SAVE && this.isPowerSaving()) {
      this.temperature = 25;
      throw new Error("Maximum in power save mode: 25");
    }
    if (this.temperature > this.MAXIMUM_TEMP) {
      this.temperature = 32;
      throw new Error("Maximum: 32");
    }
    return this.temperature
  }

  decrease() {
    this.temperature -= 1;

    if (this.temperature < this.MINIUMUM_TEMP) {
      this.temperature = 10;
      throw new Error("Minimum temperature: 10")
    }
      return this.temperature
  }

  isPowerSaving() {
    return this.powersaving
  }

  turnOffPowerSaving() {
    this.powersaving = false;
  }
  reset() {
    this.temperature = 20;
  }
}
