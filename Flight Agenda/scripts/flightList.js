$(document).ready(function () {
    $(".closeSymbol").click(function () {
        $(this).parent().remove();
    })
})

$(document).ready(function () {

    var flightDetailsUrl = 'http://flightmap.azurewebsites.net/api/flights';

    $.ajax(flightsUrl, {
        method: 'GET',
        success: function (results) {
            console.log("Here be the flights");
            console.log(results);
            for (var i = 0; i < results.length; i++) {
                var tr = $('<tr></tr>');

                var destinationTd = $('<td></td>');
                destinationTd.html(results[i].City.Name);
                tr.append(destinationTd);
                $('tbody').append(tr);

                var airlineTd = $('<td></td>');
                airlineTd.html(results[i].Airline.Name);
                tr.append(airlineTd);
                $('tbody').append(tr);

                var logoTd = $('<td></td>');
                var img = $('<img src="" />');
                img.attr('src', results[i].Airline.Logo);
                airlineTd.append(img);

                var flightNumberTd = $('<td></td>');
                flightNumberTd.html(results[i].Number);
                tr.append(flightNumberTd);
                $('tbody').append(tr);

                var terminalNumberTd = $('<td></td>');
                terminalNumberTd.html(results[i].Terminal.Name);
                tr.append(terminalNumberTd);
                $('tbody').append(tr);

                var timeTd = $('<td></td>');
                timeTd.html(results[i].ScheduledTime.substring(0, 5));
                tr.append(timeTd);
                $('tbody').append(tr);

                var timeTd = $('<td></td>');
                timeTd.html(results[i].FlightStatusTime.substring(0, 5));
                tr.append(timeTd);
                $('tbody').append(tr);
            }

            $("#departures>tbody>tr").click(function () {
                var flight = {};
                var tr = $(this);

                var townName = tr.children("td").eq(0).html();

                var airlineLogo = tr.children("td").eq(1).html();

                var flightNumber = tr.children("td").eq(2).html();

                var terminal = tr.children("td").eq(3).html();

                var scheduledTime = tr.children("td").eq(4).html().substring(0, 5);

                var expectedTime = tr.children("td").eq(5).html().substring(0, 5);

                $("#townName").html(townName);

                $("#airlineLogo").html(airlineLogo);

                $("#flightNumber").html(flightNumber + " Arrival Status");

                $("#flightTerminal").html(terminal);

                $("#scheduledTime").html(scheduledTime);

                $("#expectedTime").html("Expected " + expectedTime);

                $("#background-main").toggle(25);
            });
        },
        error: function (err) {
            console.log("An error occurred");
            console.log(err);
        }
    })
});