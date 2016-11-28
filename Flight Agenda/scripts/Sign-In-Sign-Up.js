$(document).ready(function () {

    $("#sign-in-section").hide()

    $(".sign-in-button").click(function () {
        $("#sign-in-section").toggle();
    });

});

$(document).ready(function () {

    $("#sign-up-section").hide();

    $("#signUpLink").click(function () {
        $("#sign-up-section").show();
    });

});

$(document).ready(function () {

    $("#sign-in-section").hide();

    $("#alreadyHaveAccount").click(function () {
        $("#sign-up-section").hide();
        $("#sign-in-section").show();
    });

});