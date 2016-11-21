$(document).ready(function () {
    $(".closeSymbol").click(function () {
        $(this).parent().remove();
    })
})

$(document).ready(function() {
    var flightDetailsUrl = 'http://flightmap.azurewebsites.net/api/flights'; 
});