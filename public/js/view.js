$.get("/api/wishlists", function(data) {
    if (data.length !== 0) {
  
      for (var i = 0; i < data.length; i++) {
  
        var row = $("<div>");
     
          var deleteBtn = $("<button>");
          deleteBtn.text("x");
          deleteBtn.addClass("delete btn btn-danger");
        row.append(deleteBtn)
        row.append("<h2>" + data[i].name + "</h2>");
        

        for (var j = 0; j < data[i].Items.length; j++) {
          
          row.append("<p>"+ data[i].Items[j].item + "," + " " + "$" + data[i].Items[j].price + "<p>");
   
        }
        $(".card-text").prepend(row);
      }
  
    }
  
  });