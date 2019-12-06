var db = require("../models");

module.exports = function(app) {
  // Get all examples
  // app.get("/api/examples", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.json(dbExamples);
  //   });
  // });

  //Get all Wishlists
  app.get("/api/wishlists", function(req, res) {
    db.Wishlist.findAll({}).then(function(dbWishlist) {
      res.json(dbWishlist);
    });
  });

  //Get all Users
  app.get("/api/users", function(req, res) {
    db.Users.findAll({}).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  //Create a new Wishlist
  app.post("/api/newwishlist", function(req, res) {
    Wishlist.create({
      itemA: req.body.itemA,
      itemB: req.body.itemB,
      itemC: req.body.itemC,
      itemD: req.body.itemC,
      itemD: req.body.itemD,
      itemE: req.body.itemE
    }).then(function(results) {
      res.end();
    });
  });

  //Create a new User
  app.post("/api/newuser", function(req, res) {
    User.create({
      email: req.body.email,
      password: req.body.password
    }).then(function(results) {
      res.end();
    });
  });

  //Update a wishlist
  app.put("/api/wishlists", function(req, res) {
    db.Wishlist.update({
      itemA: req.body.itemA,
      itemB: req.body.itemB,
      itemC: req.body.itemC,
      itemD: req.body.itemC,
      itemD: req.body.itemD,
      itemE: req.body.itemE
    }, {
      where: {
        id: req.body.id
    }
    }).then(function(dbWishlist) {
      res.json(dbWishlist);
    });
  });

  //Delete a wishlist

app.delete("/api/wishlists/:id", function(req, res) {
  db.Wishlist.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(dbWishlist) {
    res.json(dbWishlist)
  });
});

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
