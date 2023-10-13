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
    async getAllActive(){
        return this.Order.findAll({
            where: {Active: 1}
        });
    }
    
    async getAllActiveCount() {
        return this.Order.count({
            where: {Active: 1}
        });
    }

    async getAllCount() {
        return this.Order.count({
            where: {}
        });
    }

    async updateOrder(id) {
        return this.Order.update(
            { Active: 0 },
            { where: { id }}
        )
    }

    async getPopular() {
      const query = `SELECT TOP 2 DishName, COUNT(DishName) as count
        FROM Orders
        GROUP BY DishName
        ORDER BY count DESC;
        `;

        const [results] = await this.client.query(query);

        return results.map((result) => ({
            DishName: result.DishName,
            count: result.count,
        }));
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