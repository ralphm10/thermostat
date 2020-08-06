$( document ).ready(function() {

    thermostat = new Thermostat();


    $('#power-saving-staus').text(thermostat.isPowerSaving())

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
    });

    $('#powersave-on').click(function() { thermostat.turnOnPowerSaving()
    });

});
