$(document).ready(function () {

    $("#sign-in-section").hide();

    $(".sign-in-button").click(function () {
        $("#sign-in-section").show();
    });

});

$(document).ready(function () {

    $("#sign-up-section").hide();

    $("#signUpLink").click(function () {
        $("#sign-up-section").show();
        $("#sign-in-section").hide();
    });

});