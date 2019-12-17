module.exports = function(sequelize, DataTypes) {
    const Wishlist = sequelize.define('Wishlist', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        budget: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    Wishlist.associate = function(models) {
        Wishlist.belongsTo(models.User, {
            onUpdate: 'cascade',
            onDelete: 'SET NULL',
            foreignKey: 'UserId',
            targetKey: 'id',
        });
        Wishlist.hasMany(models.Items, {
            onDelete: 'cascade',
        });
    };

    return Wishlist;
};

/* 
  - Wishlist will be a foreignKey to Items.
  - Users will be a foreignKey to Wishlist.
 */
