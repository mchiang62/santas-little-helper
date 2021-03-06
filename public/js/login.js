$(document).ready(function() {
    // Getting references to our form and inputs
    var loginForm = $('#loginForm');
    var emailInput = $('#email-input_a');
    var passwordInput = $('#password-input_a');

    // When the form is submitted, we validate there's an email and password entered
    loginForm.on('submit', function(event) {
        event.preventDefault();
        var userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim(),
        };

        if (!userData.email || !userData.password) {
            alert('INVALID EMAIL AND/OR PASSWORD. PLEASE TRY AGAIN!');
        }
        // If we have an email and passworde run the loginUser function and clear the form
        emailInput.val('');
        passwordInput.val('');

        var dataJSON = JSON.stringify(userData);
        console.log('dataJSON', dataJSON);

        // loginUser does a post to our "api/login" route and if succesful, redirects us to new page;
        $.ajax({
            method: 'POST',
            url: '/api/login',
            data: dataJSON,
            dataType: 'json',
            contentType: 'application/json',
            success: function() {
                console.log('worked!');
            },
            error: function(error) {
                console.log(
                    error.responseText +
                        ': server returned a status of ' +
                        error.status,
                );
                alert('INVALID EMAIL AND/OR PASSWORD. PLEASE TRY AGAIN!');
            },
        }).then(function() {
            // console.log("userdata", userData);
            window.location.href = '/view';
        });
    });
});
