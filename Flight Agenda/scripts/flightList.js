$(document).ready(function () {
    $(".closeSymbol").click(function () {
        $(this).parent().remove();
    })
})

{
    date: "15.11.2016",
    flightNumber: "ROT391",
    from: "OTP",
    to: "LHR",
    distance: "1309",
    departure: "12:58",
    arrival: "14:07",
    airline: {
        name: "TAROM",
        logo: "http://blabla.com/avianga.jpg"
    },
    aircraft: {
            name: "Airbus",
            model: "A318"
    },
    seat: "20F"
}