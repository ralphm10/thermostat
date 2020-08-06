$( document ).ready(function() {

    thermostat = new Thermostat();

    $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=b3a0315249340cf6b0cb01dc60406612&units=metric', function(data) {
      $('#current-temp').text(data.main.temp);
    })

    $('#current-city').change(function() {
      var city = $('#current-city').val();
      $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=b3a0315249340cf6b0cb01dc60406612&units=metric', function(data) {
      $('#current-temp').text(data.main.temp)
    })
  })


    $('#power-saving-status').text(thermostat.isPowerSaving())

    $('#temperature').text(thermostat.getTemperature())


    $('#increase-temp').click(function() { thermostat.increase()
      $('#temperature').text(thermostat.getTemperature() );
    })

      $('#decrease-temp').click(function() { thermostat.decrease()
        $('#temperature').text(thermostat.getTemperature() );
    })

    $('#reset-temp').click(function() { thermostat.reset()
      $('#temperature').text(thermostat.getTemperature() );
  })

    $('#powersave-off').click(function() { thermostat.turnOffPowerSaving()
      $('#power-saving-status').text(thermostat.isPowerSaving());
    });

    $('#powersave-on').click(function() { thermostat.turnOnPowerSaving()
      $('#power-saving-status').text(thermostat.isPowerSaving());
    });

});
