// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  
  app.get("/list", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/list.html"));
  });

  app.get("/search", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/search.html"));
  });
  
  app.get("/view", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/view.html"));
  });
  
  app.get("/item", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/item.html"));
  });

};
