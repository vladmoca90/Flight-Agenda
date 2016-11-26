define(["jquery", "jquery.validate"], function ($) {
    $("form").validate();
});

// only for demo purposes
$.validator.setDefaults({

    submitHandler: function () {
        alert("submitted!");
    }

});

$().ready(function () {
    // validate the form when it is submitted
    var validator = $("#form1").validate({
        errorPlacement: function (error, element) {
            // Append error within linked label
            $(element)
				.closest("form")
					.find("label[for='" + element.attr("id") + "']")
						.append(error);
        },
        errorElement: "span",
        messages: {
            user: {
                required: " (required)",
                minlength: " (must be at least 3 characters)"
            },
            password: {
                required: " (required)",
                minlength: " (must be between 5 and 12 characters)",
                maxlength: " (must be between 5 and 12 characters)"
            }
        }
    });

    $(".cancel").click(function () {
        validator.resetForm();
    });

});