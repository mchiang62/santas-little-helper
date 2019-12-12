$(document).ready(function(){
    // Getting references to our form and inputs
    $("#list-form").hide();
    var name = $("#name");
    var budget = $("#budget");
   

    // When the form is submitted, we validate there's an email and password entered
    $(".list-button").on("click", function(event) {
        event.preventDefault();
  
        var userList = {
            name: name.val().trim(),
            budget: budget.val().trim(),
        };
        console.log(userList);

        submitList(userList);

        function submitList(Post) {
            $.post("/api/newwishlist/", Post, function(data) {
              window.wishlistid = data.id;
              //console.log("data", data);
            });
          }   
      $("#list-form").show();
      $("#name-form").hide();  

    });
   
});