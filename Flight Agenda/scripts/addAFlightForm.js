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
            aircraftRegistration: "required"
        },
        // Specify validation error messages
        messages: {
            departure: "The departure code must be completed",
            arrival: "The arrival code must be completed",
            departureDate: "The departure date must be selected",
            arrivalDate: "The arrival date must be selected",
            departureTime: "The departure time must be selected",
            arrivalTime: "The arrival time must be selected",
            flightDuration: "The flight duration must be completed",
            airline: "The airline name must be completed",
            flightNumber: "The flight number must be completed",
            aircraftType: "The aircraft type must be completed",
            aircraftRegistration: "The aircraft registration must be completed"
        }
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function (form) {
            form.submit();
        }
    });
});