//Creating our model for the wishlist

module.exports = function(sequelize, DataTypes) {
    //Wishlist will consist of Five items that must be a string
    var Wishlist = sequelize.define("Wishlist", {
        itemA: {
            //Items will consist 
            type: DataTypes.STRING,
            allowNull : false,
            unique: true
        }, 
        itemB: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        itemC: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        itemD: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        itemE: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    });
    return Wishlist;
};

