module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define('Order', {
        FirstName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        LastName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        DishName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        Active: {
            type: Sequelize.BOOLEAN
        }
    });
    return Order;
}