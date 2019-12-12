$(document).ready(function () {

    var firstName = $("#search-first");
    var lastName = $("#search-last");

    $("#search-button").on("click", function (event) {
        event.preventDefault();

        var searchName = {

            firstName: firstName.val().trim(),
            lastName: lastName.val().trim(),

        };
        console.log(searchName + "search");

        searchWishlist(searchName);

        function searchWishlist(Get) {

            $.get("/api/wishlists", Get, function (data) {

                $('#displayFirst').text(data);
                $('#displayLast').text(data);

            });




        }

        //     $('#displayFirst').text($("#search-first").val());
        //     $('#displayLast').text($("#search-last").val());

        // //   still need to grab data from the wish list

    });





});