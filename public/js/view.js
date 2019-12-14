function deleteList(id) {
  $.ajax({
    method: "DELETE",
    url: "/api/wishlists/" + id
  })
    .then(function() {
      console.log("We did a thing");
      //getPosts(postCategorySelect.val());
    });
}

function deleteItem(id) {
  $.ajax({
    method: "DELETE",
    url: "/api/wishlistitem/" + id
  })
    .then(function() {
      console.log("We did a thing");
      //getPosts(postCategorySelect.val());
    });
}



$.get("/api/wishlists", function(data) {
    if (data.length !== 0) {
  
      for (var i = 0; i < data.length; i++) {
  
        var row = $("<div>");
     
          var deleteBtnList = $("<button>");
          deleteBtnList.text("x");
          deleteBtnList.addClass("delete btn btn-danger delete-list");
          deleteBtnList.attr("id", "deleteList" + data[i].id);
          var x73 = data[i].id;
          

        row.append('<h2>' + data[i].name + "            " + deleteBtnList.prop('outerHTML') + "</h2>");
        
        $("body").on("click", ("#deleteList" + data[i].id), (event) => {
          
          deleteList(event.target.id.split("deleteList")[1]);
      
        });
        

        for (var j = 0; j < data[i].Items.length; j++) {

          var deleteBtnItem = $("<button>");
          deleteBtnItem.text("x");
          deleteBtnItem.addClass("delete btn btn-danger delete-item");
          deleteBtnItem.attr("id", "deleteItem" + data[i].Items[j].id);

          row.append("<p>"+ data[i].Items[j].item + "," + " " + "$" + data[i].Items[j].price +  "    " + deleteBtnItem.prop('outerHTML') +  "</p>");
          $("body").on("click", ("#deleteItem" + data[i].Items[j].id), (event) => {
          
          deleteItem(event.target.id.split("deleteItem")[1]);
          
        });
        }
        $(".card-text").prepend(row);
      }
  
    }
  
  });