//Creating model for the items contained in the wishlist

module.exports = function (sequelize, DataTypes) {
    //Items will consist of an item name and a price to be set by user
    var Items = sequelize.define("Items", {
        item: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        url: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
    
    Items.associate = function(models) {
        Items.belongsTo(models.Wishlist, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Items;
};