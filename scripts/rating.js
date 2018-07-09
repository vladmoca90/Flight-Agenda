$(document).ready(function () {

    $("#saved-flight-message").hide();

    $('button[type="submit"]').click(function () {
        $("#saved-flight-message").show();
    });

});