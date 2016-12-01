// Wait for the DOM to be ready
$(function () {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='add-a-flight']").validate({
        // Specify validation rules
        rules: {
            // The key name on the left side is the name attribute
            // of an input field. Validation rules are defined
            // on the right side
            departure: "required",
            arrival: "required",
            departureDate: "required",
            arrivalDate: "required",
            departureTime: "required",
            arrivalTime: "required",
            flightDuration: "required",
            airline: "required",
            flightNumber: "required",
            aircraftType: "required",
            aircraftRegistration: "required",
            seat: "required"
        },
        // Specify validation error messages
        messages: {
            departure: "The departure code must be completed",
            arrival: "The arrival code must be completed",
            departureDate: "The departure date must be selected",
            arrivalDate: "The arrival date must be selected",
            departureTime: "The departure time must be selected",
            arrivalTime: "The arrival time must be selected",
            flightDuration: "The flight duration must be selected",
            airline: "The airline name must be completed",
            flightNumber: "The flight number must be completed",
            aircraftType: "The aircraft type must be completed",
            aircraftRegistration: "The aircraft registration must be completed",
            seat: "You must write the seat number"
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        function (form) {
            form.submit();
        }
    });
});

/* $(document).ready(function () {
    $("#save-button>button").click(function () {
        if (form.submit()) {
            location.href = "Rating.html";
        }
        else {
            location.href = "";
        }
    });
}); */