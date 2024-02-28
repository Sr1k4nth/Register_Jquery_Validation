$(document).ready(function ($) {
  $("#register-form").validate({
    rules: {
      username: "required",
      email: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        minlength: 6, // Corrected minlength value
      },
      confirmpassword: {
        required: true,
        minlength: 6, // Corrected minlength value
        equalTo: "#password",
      },
      checkout: {
        required: true,
      },
      gender: "required",
    },
    messages: {
      username: "Please enter your Name",
      email: "Please enter a valid email address",
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 6 characters long",
      },
      confirmpassword: {
        required: "Please confirm your password",
        minlength: "Your password must be at least 6 characters long",
        equalTo: "Passwords do not match",
      },
      checkout: "Please select your education level.",
      gender: "Please select your gender",
    },

    errorPlacement: function (error, element) {
      if (element.is(":radio")) {
        error.appendTo(element.parents(".form-group"));
      } else if (element.attr("type") == "checkbox") {
        error.appendTo(element.parent().parent().find(".test"));
      } else {
        error.appendTo(element.next(".test"));
      }
    },
  });
});
