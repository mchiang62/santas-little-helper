$(document).ready(function(){
    // Getting references to our form and inputs
    var name = $("#item");
    var budget = $("#price");
    var url = $("#url");
   

    // When the form is submitted, we validate there's an email and password entered
    $(".item-button").on("click", function() {
    
        var userList = {
            item: item.val().trim(),
            price: price.val().trim(),
            url: url.val()
        };

        submitList(userList);

        function submitList(Post) {
            $.post("/api/newwishlistitem/", Post)// function() {
              //window.location.href = "/search";
           // });
          }
    });
   
});