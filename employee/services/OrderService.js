class OrderService {
    constructor(db) {
        this.client = db.sequelize;
        this.Order = db.Order;
    }

    async getAll() {
        return this.Order.findAll({
            where: {}
        });
    }

    async updateOrder(id) {
        return this.Order.update(
            { Active },
            { where: { id }}
        )
    }

    async create(firstName, lastName, dishName) {
        return this.Order.create(
            {
                FirstName: firstName,
                LastName: lastName,
                DishName: dishName,
                Active: 1
            }
        ).catch(function(err) {
            console.log(err);
        });
    }
}

module.exports = OrderService;