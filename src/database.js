const { Sequelize, Model } = require("sequelize")
require('dotenv').config()

class Database {
    constructor() {
        this.init();
    }
    init() {
        this.db = new Sequelize({
            database: process.env.DB_NAME,
            host: process.env.DB_HOST,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            dialect: process.env.DB_DIALECT,
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorization: false
                }
            }
        })
    }
}
module.exports = new Database();