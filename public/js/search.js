$(document).ready(function () {
    var firstName = $("#search-first");
    var lastName = $("#search-last");
    $("#search-button").on("click", function (event) {
        event.preventDefault();
        if (!firstName.val().trim() || !lastName.val().trim()) {
            return;
        }
        searchWishlist();
        // console.log(searchName + "search");
    });

    function searchWishlist() {
        $.get("/api/wishlists", function (data) {
            console.log(data)
            if (data.length !== 0) {
                for (var i = 0; i < data.length; i++) {

                    var wishlistName = data[i].name;
                    console.log(wishlistName);
                    var addWishlist = `<h3>${wishlistName}</h3>`;
                    var row = $("<div>");
                    row.append(addWishlist);

                    for (var j = 0; j < data[i].Items.length; j++) {
                        var itemName = data[i].Items[j].item;
                        var itemPrice = data[i].Items[j].price;
                        console.log(itemName);
                        console.log(itemPrice);
                        var addItems = `<p>${itemName} price: $${itemPrice}<p>`;
                        row.append(addItems);
                        // row.append("<p>" + data[i].Items[j].item + "      " + data[i].Items[j].price + "<p>");
                    }

                    $("#displaySearch").prepend(row);
                }
            } else {
                renderEmpty();
            }
        });
    }

    function renderEmpty() {
        var alertDiv = $("<div>");
        alertDiv.addClass("alert alert-danger");
        alertDiv.text("The user you entered doesn't exist or hasn't created a wishlist. Please try again");
        $("#displaySearch").append(alertDiv);
    }

});





// $(document).ready(function () {

//     var firstName = $("#search-first");
//     var lastName = $("#search-last");

//     $("#search-button").on("click", function (event) {
//         event.preventDefault();

//         var searchName = {

//             firstName: firstName.val().trim(),
//             lastName: lastName.val().trim(),

//         };
//         console.log(searchName + "search"); //searchName works

//         searchWishlist(searchName);


//         function searchWishlist(Get) {

//             $.get("/api/wishlists", Get, function (data) {

//                 if (data.length !== 0) {

//                     for (var i = 0; i < data.length; i++) {

//                         var row = $("<div>");

//                         row.append("<h2>" + data[i].name + "</h2>");
//                         for (var j = 0; j < data[i].Items.length; j++) {

//                             row.append("<p>" + data[i].Items[j].item + "      " + data[i].Items[j].price + "<p>");

//                         }

//                         $("#displaySearch").prepend(row);


//                     }

//                 }


//             });


//         }

//         //     $('#displayFirst').text($("#search-first").val());
//         //     $('#displayLast').text($("#search-last").val());


//     });





// });




// // var rowsToAdd = [];

// // for (var i = 0; i < data.length; i++) {
// //     rowsToAdd.push(createListRow(data[i]));

// // }




// // var row = $("<div>")
// // row.addClass("list")

// // row.append("<p>" + data[i].firstName + "</p>");
// // row.append("<p>" + data[i].lastName + "</p>");



// // $('#displayFirst').prepend(row);
// // $('#displayLast').prepend(row);



// // $('#displayFirst').text(data);
// // $('#displayLast').text(data);


// // function createListRow(listData) {
// //     var newTr = $("<tr>");
// //     newTr.data("list", listData);
// //     newTr.append("<td>" + listData.name + "</td>");
// //     if (listData.Posts) {
// //         newTr.append("<td> " + listData.Posts.length + "</td>");
// //     } else {
// //         newTr.append("<td>0</td>");
// //     }
// //     // newTr.append("<td><a href='/view?author_id=" + listData.id + "'>Go to Posts</a></td>");

// //     // return newTr;
// // }