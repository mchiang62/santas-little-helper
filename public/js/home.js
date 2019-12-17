$(document).ready(function() {
    $('#login').click(function() {
        setTimeout(function() {
            window.scrollTo(0, document.body.scrollHeight);
        }, 50);
        $('#loginForm').collapse('show');
        $('#createForm').collapse('hide');
    });

    $('#createAcc').click(function() {
        $('#createForm').collapse('show');
        $('#loginForm').collapse('hide');
    });
});
