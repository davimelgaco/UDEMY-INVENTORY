const database = require('../database');
const Inventory = require('./inventory');
const Product = require('./product');
const User = require('./user');

class InventoryMovement {
    constructor() {
        this.model = database.db.define("inventory_movements", {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            amount: {
                type: database.db.Sequelize.INTEGER,
                allowNull: false
            },
            type: {
                type: database.db.Sequelize.STRING,
                allowNull: false
            },
            productId: {
                type: database.db.Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: Product,
                    key: "id"
                }
            },
            userId: {
                type: database.db.Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: User,
                    key: "id"
                }
            },
            inventoryId: {
                type: database.db.Sequelize.INTEGER,
                references: {
                    model: Inventory,
                    key: "id"
                }
            }

        })
        this.model.belongsTo(User, {
            foreignKey: 'userId'
        })
        this.model.belongsTo(Product, {
            foreignKey: 'productId'
        })
        this.model.belongsTo(Inventory, {
            foreignKey: 'inventoryId'
        })
        User.hasMany(this.model, {
            foreignKey: 'userId'
        })
        Product.hasMany(this.model, {
            foreignKey: 'productId'
        })
        Inventory.hasMany(this.model, {
            foreignKey: 'inventoryId'
        })
    }
}

module.exports = new InventoryMovement().model;