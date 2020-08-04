
describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('starts at 20', function() {
  it('should start with temperature of 20', function() {
    expect(thermostat['temperature']).toEqual(20);
  });
});

  describe('increase temperature', function() {
    it('can increase the temperature', function() {
      thermostat.increase(5);
      expect(thermostat['temperature']).toEqual(25);

    });

  });

  describe('decrease temperature', function() {
    it('can decrease the temperature', function() {
      thermostat.decrease(5);
      expect(thermostat['temperature']).toEqual(15);

    });

  });

  describe('throws an error', function() {
    it('throws error if user tries to reduce temp to below Minimum', function() {

      expect(function() {thermostat.decrease(11)}).toThrowError("Minimum temperature: 10");
    });
  });

});
