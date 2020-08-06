$( document ).ready(function() {

    thermostat = new Thermostat();

    alert( "welcome to your thermostat" );

    $('#temperature').text(thermostat.getTemperature())

    $('#increase-temp').click(function() { thermostat.increase()
      $('#temperature').text(thermostat.getTemperature() );
    })

      $('#decrease-temp').click(function() { thermostat.decrease()
        $('#temperature').text(thermostat.getTemperature() );
    })

});
