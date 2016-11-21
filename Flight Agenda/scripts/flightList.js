$(document).ready(function () {

    var flightListUrl = 'http://flightmap.azurewebsites.net/api/flights';

    $.ajax(flightsListUrl, {
        method: 'GET',
        success: function (results) {
            console.log('Here be the flights');
            console.log(results);
            for (var i = 0; i < results.length; i++) {
                var tr = $('<tr></tr>');

                var dateTd = $('<td></td>');
                dateTd.html(results[i].date);
                tr.append(dateTd);
                $('tbody').append(tr);

                var flightNumberTd = $('<td></td>');
                flightNumberTd.html(results[i].flightNumber);
                tr.append(flightNumberTd);
                $('tbody').append(tr);

                var toDestinationTd = $('<td></td>');
                toDestinationTd.html(results[i].toDestination);
                tr.append(toDestinationTd);
                $('tbody').append(tr);

                var fromDestinationTd = $('<td></td>');
                fromDestinationTd.html(results[i].fromDestination);
                tr.append(fromDestinationTd);
                $('tbody').append(tr);

                var distanceTd = $('<td></td>');
                distanceTd.html(results[i].distance);
                tr.append(distanceTd);
                $('tbody').append(tr);

                var departureTd = $('<td></td>');
                departureTd.html(results[i].departure);
                tr.append(departureTd);
                $('tbody').append(tr);

                var arrivalTd = $('<td></td>');
                arrivalTd.html(results[i].arrival);
                tr.append(arrivalTd);
                $('tbody').append(tr);

                var airlineTd = $('<td></td>');
                airlineTd.html(results[i].airline);
                tr.append(airlineTd);
                $('tbody').append(tr);

                var logoTd = $('<td></td>');
                var img = $('<img src="" />');
                img.attr('src', results[i].airline.Logo);
                airlineTd.append(img);

                var aircraftTd = $('<td></td>');
                aircraftTd.html(results[i].aircraft.Name);
                tr.append(aircraftTd);
                $('tbody').append(tr);

                var aircraftTd = $('<td></td>');
                aircraftTd.html(results[i].aircraft.model);
                tr.append(aircraftTd);
                $('tbody').append(tr);

                var seatTd = $('<td></td>');
                seatTd.html(results[i].seat);
                tr.append(seatTd);
                $('tbody').append(tr);
            }
        },
        error: function (err) {
            console.log("An error occurred");
            console.log(err);
        }
    });

    $(".closeSymbol").click(function () {
        $(this).parent().remove();
    });

});