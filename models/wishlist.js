//Creating our model for the wishlist

module.exports = function(sequelize, DataTypes) {
    //Wishlist will consist of Five items that must be a string
    var Wishlist = sequelize.define("Wishlist", {
        itemA: {
            //Items will consist 
            type: DataTypes.STRING,
            allowNull : false
        }, 
        itemB: {
            type: DataTypes.STRING,
            allowNull: false
        },
        itemC: {
            type: DataTypes.STRING,
            allowNull: false
        },
        itemD: {
            type: DataTypes.STRING,
            allowNull: false
        },
        itemE: {
            type: DataTypes.STRING,
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

    return Wishlist;
};

