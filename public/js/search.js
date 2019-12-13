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

                if (data.length !== 0) {

                    for (var i = 0; i < data.length; i++) {
                        var row = $("<div>")
                        row.addClass("list")

                        row.append("<p>" + data[i].firstName + "</p>");
                        row.append("<p>" + data[i].lastName + "</p>");

                        console.log (data[i], "data")


                        $('#displayFirst').prepend(row);
                        $('#displayLast').prepend(row);

                    }

                    // $('#displayFirst').text(data);
                    // $('#displayLast').text(data);

                }

            });




        }

        //     $('#displayFirst').text($("#search-first").val());
        //     $('#displayLast').text($("#search-last").val());

        // //   still need to grab data from the wish list

    });





});