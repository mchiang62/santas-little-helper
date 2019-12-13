// Creating our model for the wishlist
// var Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
    //Wishlist will consist of Items
    var Wishlist = sequelize.define("Wishlist", {
        //Wishlist will be a foreignKey to Items, and Users will be a foreignKey to Wishlist
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        budget: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    Wishlist.associate = function(models) {
        Wishlist.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    Wishlist.associate = function(models) {
        Wishlist.hasMany(models.Items, {
            onDelete: "cascade"
        });
    };

    return Wishlist;
};