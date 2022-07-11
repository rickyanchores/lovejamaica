const uuid = require("uuid").v4;
module.exports = (sequelize, DataTypes, Sequelize) => {
    const Product = sequelize.define(
        "Product", {
            _id: {
                type: DataTypes.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            category: {
                type: DataTypes.STRING,
            },
            description: {
                type: DataTypes.STRING,
            },
            price: {
                type: DataTypes.NUMERIC(5, 2),
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            img_url: {
                type: DataTypes.STRING,
            }
        }, {
            hooks: {
                beforeCreate: function (product) {
                    product._id = uuid();
                },
            },
        }
    );
    return Product;
};