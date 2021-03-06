var db = require('../models');
var passport = require('../config/passport.js');

module.exports = function(app) {
    // Using the passport.authenticate middleware with our local strategy.
    // If the user has valid login credentials, send them to the members page.
    // Otherwise the user will be sent an error
    app.post('/api/login', passport.authenticate('local'), function(req, res) {
        console.log(req.body);
        res.json(req.body);
    });

    // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
    // how we configured our Sequelize User Model. If the user is created sucessfully, proceed to log the user in,
    // otherwise send back an error
    app.post('/api/signup', function(req, res) {
        db.User.create({
            email: req.body.email,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
        }).then(function() {
            res.redirect(307, '/api/login');
        }); //.catch(function(err){
        //res.status(401).json(err);
        // });
    });

    // Route for logging user out
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    // Route for getting some data about our user to be used client side
    app.get('/api/user_data', function(req, res) {
        if (!req.user) {
            // The user is not logged in, send back an empty object
            //console.log(req.user);
            res.json({});
        } else {
            // Otherwise send back the user's email and id
            // Sending back a password, even a hashed password, isn't a good idea
            res.json({
                firstName: req.user.firstName,
                id: req.user.id,
            });
        }
    });

    //Get all Wishlists of a User
    app.get('/api/wishlists', function(req, res) {
        console.log(req)
        db.Wishlist.findAll({
            where: {
                UserId: req.user.id,
            },
            include: [db.Items],
        }).then(function(dbWishlist) {
            res.json(dbWishlist);
        });
    });

    // Get wishlist by user
    app.get('/api/users', function(req, res) {
        db.User.findAll({
            where: {
                firstName: req.user.firstName,
                lastName: req.user.lastName,
            },
            include: [
                {
                    model: [db.Wishlist],
                    include: [
                        {
                            model: [db.Items],
                        },
                    ],
                },
            ],
        }).then(function(dbWishlist) {
            res.json(dbWishlist);
        });
    });

    //Get a specific of a Wishlist
    app.get('/api/wishlistitems', function(req, res) {
        db.Items.findAll({
            where: {
                WishlistId: req.wishlist.id,
            },
        }).then(function(dbItems) {
            res.json(dbItems);
        });
    });

    //Create a new Wishlist
    app.post('/api/newwishlist', function(req, res) {
        console.log(req.user);
        console.log(req.user.id);
        db.Wishlist.create({
            name: req.body.name,
            budget: req.body.budget,
            UserId: req.user.id,
        }).then(function(dbWishlist) {
            res.json(dbWishlist);
        });
    });

    //Create a new item
    app.post('/api/newwishlistitem', function(req, res) {
        //console.log("req.body", req.body.wishlistId)
        db.Items.create({
            item: req.body.item,
            price: req.body.price,
            url: req.body.url,
            WishlistId: req.body.wishlistid,
        }).then(function(dbItems) {
            res.json(dbItems);
        });
    });

    //Delete an item
    app.delete('/api/wishlistitem/:id', function(req, res) {
        db.Items.destroy({
            where: {
                id: req.params.id,
            },
        }).then(function(dbItems) {
            res.json(dbItems);
        });
    });

    //Update a wishlist
    app.put('/api/wishlists', function(req, res) {
        db.Wishlist.update(
            {
                name: req.body.name,
                budget: req.body.budget,
            },
            {
                where: {
                    id: req.body.id,
                },
            },
        ).then(function(dbWishlist) {
            res.json(dbWishlist);
        });
    });

    //Update a wishlist item

    app.put('/api/wishlistitems', function(req, res) {
        db.Items.update(
            {
                item: req.body.item,
                price: req.body.price,
                url: req.body.url,
            },
            {
                where: {
                    id: req.body.id,
                },
            },
        ).then(function(dbItems) {
            res.json(dbItems);
        });
    });

    //Delete a wishlist

    app.delete('/api/wishlists/:id', function(req, res) {
        db.Wishlist.destroy({
            where: {
                id: req.params.id,
            },
        }).then(function(dbWishlist) {
            res.json(dbWishlist);
        });
    });
};
