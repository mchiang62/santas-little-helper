$(document).ready(function(){
    // Getting references to our form and inputs
    var item = $("#item");
    var price = $("#price");
    var url = $("#url");
   

    // When the form is submitted, we validate there's an email and password entered
    $(".item-button").on("click", function() {
    // console.log("window", window.wishlistid)
        var userList = {
            item: item.val().trim(),
            price: price.val().trim(),
            url: url.val(),
            wishlistid: window.wishlistid
        };
       
        submitList(userList);

        function submitList(Post) {
            $.post("/api/newwishlistitem/", Post)
            //  window.location.href = "/view";
          }
        
    });
   
});