$(document).ready(function(){
    // Getting references to our form and inputs
    var loginForm = $("#loginForm");
    var emailInput = $("#email-input_a");
    var passwordInput = $("#password-input_a");

    // When the form is submitted, we validate there's an email and password entered
    loginForm.on("submit", function(event) {
        event.preventDefault();
        var userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };
        if (!userData.email || !userData.password) {
            return;
        }
        // If we have an email and passworde run the loginUser function and clear the form
        loginUser(userData.email, userData.password);
        emailInput.val("");
        passwordInput.val("");
    });

    // loginUser does a post to our "api/login" route and if succesful, redirects us to the members page
    function loginUser(email, password){
        $.post("/api/login", {
            email: email,
            password: password
        }).then(function(){
            console.log("!!!!!");
           // window.location.replace("/members");
            // if there's an error, log the error
        }).catch(function(err){
            console.log(err);
        });
    }
});