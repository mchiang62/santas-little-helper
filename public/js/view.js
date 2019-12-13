$.get("/api/wishlists", function(data) {
  console.log("data", data)
    if (data.length !== 0) {
  
      for (var i = 0; i < data.length; i++) {
  
        var row = $("<div>");
     
        row.append("<p>" + data[i].name + "</p>");
        row.append("<p>"+ data[2].Items[0].item + "<p>")
   
       

        // $.get("api/wishlistitems", function(data){
        //   console.log("response", response)
        //   if (response.length !== 0){

        //     for(var x=0; x < response.length; x++){
        //     var anotherrow=$("<div>");

        //     anotherrow.append("<p>" + response[i].name + "<p>");
        //   }
        // }
        // });
 
  
        $(".card-text").prepend(row);
  
      }
  
    }
  
  });