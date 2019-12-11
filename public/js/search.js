$(document).ready(function () {


    $("#search-button").on("click", function (event) {
        event.preventDefault();
        $('#displayFirst').text($("#search-first").val());
        $('#displayLast').text($("#search-last").val());

    //   still need to grab data from the wish list

    });


    


});