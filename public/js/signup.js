$(document).ready(function() {
    // Getting references to our form and input
    var signUpForm = $("#createForm");
    var emailInput = $("input#email-input");
    var passwordInput = $("input#password-input");
    var fNameInput = $("input#fname-input");
    var lNameInput = $("input#Lname-input");

    // When the signup button is clicked, we validate the email and password are not blank
    signUpForm.on("submit", function (event) {
        event.preventDefault();
        var userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim(),
            firstName: fNameInput.val().trim(),
            lastName: lNameInput.val().trim()
        };

        if (!userData.email || !userData.password || !userData.firstName || !userData.lastName) {
            return;
        }

        // if we have an email, password, first name, and last name run the signUpUser function
        signUpUser(userData.email, userData.password, userData.firstName, userData.lastName);
        emailInput.val("");
        passwordInput.val("");
        fNameInput.val("");
        lNameInput.val("");
    });

    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(email, password, firstName, lastName) {
        $.post("/api/signup", {
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName
        })
        .then(function() {
            window.location.href = "/view";
            // if there's an error, handle it by throwing up a bootstrap alert
        })
        .catch(handleLoginErr);
    }

    function handleLoginErr(err) {
        $("#alert.msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }
});