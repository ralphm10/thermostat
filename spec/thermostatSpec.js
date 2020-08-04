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

});
