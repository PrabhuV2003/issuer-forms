$(document).ready(function() {

    // Register Form Validation
    $('#register-form').validate({
        rules: {
            username: {
                required: true
            },
            phone: {
                number: true
            },
            password: {
                required: true,
                minlength: 6
            },
            confirm_password: {
                required: true,
                equalTo: "#password"
            }
        },
        messages: {
            username: {
                required: "Please enter your username or email"
            },
            phone: {
                required: "Please enter your phone number"
            },
            password: {
                required: "Please enter a password",
                minlength: "Your password must be at least 6 characters long"
            },
            confirm_password: {
                required: "Please confirm your password",
                equalTo: "Passwords do not match"
            }
        },
        submitHandler: function(form) {

            registerToast("successfully Registered!");

            setTimeout(function() {
                window.location.href = "login.html";
            }, 2000)

        }
    });

    // Register Toast Message
    function registerToast(message) {
        const toast = document.getElementById('toast');
        toast.textContent = message;
        toast.className = "toast show";
        setTimeout(function() {
            toast.className = toast.className.replace("show", "hidden");
        }, 3000);
    }

    // Login Form Validation
    $('#login-form').validate({
        rules: {
            username: {
                required: true
            },
            login_password: {
                required: true,
            },
        },
        messages: {
            username: {
                required: "Please enter your username or email"
            },
            login_password: {
                required: "Please enter a password"
            },
        },
        submitHandler: function(form) {

            setTimeout(function() {
                window.location.href = "/index.html";
            }, 1000)

        }
    });

    // Forgot Password Form Validation
    $('#forgot-form').validate({
        rules: {
            forgot_email: {
                required: true,
                email: true
            }
        },
        messages: {
            forgot_email: {
                email: "Please enter a valid email address"
            }
        },
        submitHandler: function(form) {

            forgotToast("✔️ Please check your inbox to reset your password.");

        }
    });

    // Forgot Password Toast Message
    function forgotToast(message) {
        const toast = document.getElementById('forgotToast');
        toast.textContent = message;
        toast.className = "forgotToast show";
        setTimeout(function() {
            toast.className = toast.className.replace("show", "hidden");
        }, 4000);
    }

    // Reset Password Form Validation
    $('#reset_pass-form').validate({
        rules: {
            password: {
                required: true,
                minlength: 6
            },
            confirm_password: {
                required: true,
                equalTo: "#password"
            }
        },
        messages: {
            password: {
                required: "Please enter a password",
                minlength: "Your password must be at least 6 characters long"
            },
            confirm_password: {
                required: "Please confirm your password",
                equalTo: "Passwords do not match"
            }
        },
        submitHandler: function(form) {

            resetToast('Your password has been successfully updated. <a href="/signin">Sign in</a> to access the dashboard.');

            setTimeout(function() {
                window.location.href = "login.html";
            }, 6000)

        }
    });

    // Reset Password Toast Message
    function resetToast(message) {
        const toast = document.getElementById('resetToast');
        toast.className = "resetToast show";
        setTimeout(function() {
            toast.className = toast.className.replace("show", "hidden");
        }, 5000);
    }

    // Password Hide & Show
    $('.eye').click(function() {
        if($(this).hasClass('fa-eye-slash')) {

            $(this).removeClass('fa-eye-slash');

            $(this).addClass('fa-eye');

            $('#password').attr('type','text');

            $('#login_password').attr('type','text');

        } else {

            $(this).removeClass('fa-eye');

            $(this).addClass('fa-eye-slash');

            $('#password').attr('type','password');

            $('#login_password').attr('type','password');

        }
    });

});