﻿$(document).ready(function () {

    var flightDetailsUrl = 'http://flightmap.azurewebsites.net/api/flights';

    $.ajax(flightsUrl, {
        method: 'GET',
        success: function (results) {
            console.log("Here be the flights");
            console.log(results);
            for (var i = 0; i < results.length; i++) {
                var tr = $('<tr></tr>');

                var dateTd = $('<td></td>');
                dateTd.html(results[i].City.Name);
                tr.append(dateTd);
                $('tbody').append(tr);

                var flightNumberTd = $('<td></td>');
                flightNumberTd.html(results[i].Airline.Name);
                tr.append(flightNumberTd);
                $('tbody').append(tr);

                var toDestinationTd = $('<td></td>');
                toDestinationTd.html(results[i].Number);
                tr.append(toDestinationTd);
                $('tbody').append(tr);

                var fromDestinationTd = $('<td></td>');
                fromDestinationTd.html(results[i].Terminal.Name);
                tr.append(fromDestinationTd);
                $('tbody').append(tr);

                var distanceTd = $('<td></td>');
                distanceTd.html(results[i].ScheduledTime.substring(0, 5));
                tr.append(distanceTd);
                $('tbody').append(tr);

                var departureTd = $('<td></td>');
                departureTd.html(results[i].FlightStatusTime.substring(0, 5));
                tr.append(departureTd);
                $('tbody').append(tr);

                var arrivalTd = $('<td></td>');
                arrivalTd.html(results[i].FlightStatusTime.substring(0, 5));
                tr.append(arrivalTd);
                $('tbody').append(tr);

                var logoTd = $('<td></td>');
                var img = $('<img src="" />');
                img.attr('src', results[i].Airline.Logo);
                airlineTd.append(img);

                var aircraftTd = $('<td></td>');
                aircraftTd.html(results[i].FlightStatusTime.substring(0, 5));
                tr.append(aircraftTd);
                $('tbody').append(tr);

                var seatTd = $('<td></td>');
                seatTd.html(results[i].FlightStatusTime.substring(0, 5));
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