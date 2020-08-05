'use strict';

describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('starts at 20', function() {
    it('should start with temperature of 20', function() {
      expect(thermostat.getTemperature()).toEqual(20);
    });
  });

  describe('increase temperature', function() {
    it('can increase the temperature', function() {
      thermostat.increase();
      expect(thermostat.getTemperature()).toEqual(21);
    });
  });

  describe('decrease temperature', function() {
    it('can decrease the temperature', function() {
      thermostat.decrease();
      expect(thermostat.getTemperature()).toEqual(19);
    });
  });

  describe('throws an error', function() {
    it('throws error if user tries to reduce temp to below minimum', function() {
      thermostat['temperature'] = 10;
      expect(function() {thermostat.decrease()}).toThrowError("Minimum temperature: 10");
    });
  });

  describe('start with power saving mode on', function() {
    it('should start with power saving mode on', function() {
      expect(thermostat.isPowerSaving()).toEqual(true);
    });
  });

  describe('throws an error', function() {
    it('throws error if user tries to increase temp above maximum in power save mode', function() {
      thermostat['temperature'] = 25;
      expect(function() {thermostat.increase()}).toThrowError("Maximum in power save mode: 25");
    });
  });

  describe('throws an error', function() {
    it('throws error if user tries to increase temp above maximum', function() {
      thermostat['temperature'] = 32;
      thermostat.turnOffPowerSaving();
      expect(function() {thermostat.increase()}).toThrowError("Maximum: 32");
    });
  });

  describe('turn off power saving', function() {
    it('can turn off power saving', function() {
      thermostat.turnOffPowerSaving();
      expect(thermostat.isPowerSaving()).toEqual(false);
    });
  });

  describe('turn on power saving', function() {
    it('can turn on power saving', function() {
      thermostat.turnOnPowerSaving();
      expect(thermostat.isPowerSaving()).toEqual(true);
    });
  });

  describe('reset temperature', function() {
    it('can turn be reset to 20 degrees', function() {
      thermostat.increase();
      thermostat.reset();
      expect(thermostat.getTemperature()).toEqual(20);
    });
  });

  describe('low energy usage', function() {
    it('can return low usage', function() {
      thermostat['temperature'] = 17;
      expect(thermostat.energyUsage()).toEqual("low-usage");
    });
  });

  describe('energy usage', function() {
    it('can return medium usage', function() {
      expect(thermostat.energyUsage()).toEqual("medium-usage");
    });
  });

  describe('energy usage', function() {
    it('can return high usage', function() {
      thermostat['temperature'] = 26;
      expect(thermostat.energyUsage()).toEqual("high-usage");
    });
  });

});
