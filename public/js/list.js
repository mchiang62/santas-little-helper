$(document).ready(function(){
    // Getting references to our form and inputs
    var itemA = $("#item1");
    var itemB = $("#item2");
    var itemC = $("#item3");
    var itemD = $("#item4");
    var itemE = $("#item5");

    // When the form is submitted, we validate there's an email and password entered
    $(".list-button").on("click", function(event) {
        event.preventDefault();
        var userList = {
            itemA: itemA.val().trim(),
            itemB: itemB.val().trim(),
            itemC: itemC.val().trim(),
            itemD: itemD.val().trim(),
            itemE: itemE.val().trim(),
        };

        submitList(userList);

        function submitList(Post) {
            $.post("/api/newwishlist/", Post, function() {
              window.location.href = "/search";
            });
          }
    });
   
});