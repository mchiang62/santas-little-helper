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

        function createListRow(listData) {
            var newTr = $("<tr>");
            newTr.data("list", listData);
            newTr.append("<td>" + listData.name + "</td>");
            if (listData.Posts) {
                newTr.append("<td> " + listData.Posts.length + "</td>");
            } else {
                newTr.append("<td>0</td>");
            }
            // newTr.append("<td><a href='/view?author_id=" + listData.id + "'>Go to Posts</a></td>");
     
            // return newTr;
        }

        function searchWishlist(Get) {

            $.get("/api/wishlists", Get, function (data) {

                var rowsToAdd = [];

                for (var i = 0; i < data.length; i++) {
                    rowsToAdd.push(createListRow(data[i]));
                    
                }





                        // var row = $("<div>")
                        // row.addClass("list")

                        // row.append("<p>" + data[i].firstName + "</p>");
                        // row.append("<p>" + data[i].lastName + "</p>");



                        // $('#displayFirst').prepend(row);
                        // $('#displayLast').prepend(row);

                    

                    // $('#displayFirst').text(data);
                    // $('#displayLast').text(data);

                

            });




        }

        //     $('#displayFirst').text($("#search-first").val());
        //     $('#displayLast').text($("#search-last").val());

        // //   still need to grab data from the wish list

    });





});