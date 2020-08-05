class Thermostat {
  constructor(){
    this.MINIUMUM_TEMP = 10;
    this.MAXIMUM_TEMP_POWER_SAVE = 25;
    this.MAXIMUM_TEMP = 32,
    this.powersaving = true;
    this.DEFAULT_TEMP = 20;
    this.temperature = this.DEFAULT_TEMP;
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

  turnOnPowerSaving() {
    this.powersaving = true;
  }

  reset() {
    this.temperature = this.DEFAULT_TEMP;
  }

  energyUsage() {

    if (this.temperature < 18) {
      return "low-usage"
    }
    if (this.temperature <= 25) {
      return "medium-usage"
    }
    return "high-usage"
  }
}
