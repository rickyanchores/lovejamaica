const {
    Sequelize,
    DataTypes
} = require("sequelize");
const uuid = require("uuid").v4;


const sequelize = new Sequelize(
    // process.env.PG_DATABASE_OFF,
    // process.env.PG_USER_OFF,
    // process.env.PG_PASSWORD_OFF,
    // DEPLOYED V.
    process.env.PG_DATABASE,
    process.env.PG_USER,
    process.env.PG_PASSWORD, {
        // host: process.env.PG_HOST_OFF,
        // DEPLOYED V.
        host: process.env.PG_HOST,

        dialect: "postgres",
        logging: false,
        define: {
            timestamps: false,
        },

        // DEPLOYED V.
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
    }
);

//MODELS IMPORTS
const Product = require("./models/products.js")


const models = {
    Product: Product(sequelize, DataTypes, Sequelize)
};


Object.keys(models).forEach((modelName) => {
    if ("associate" in models[modelName]) {
        models[modelName].associate(models);
    }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

sequelize
    .authenticate()
    .then(() => console.log("Connection Established"))
    .catch((e) =>
        console.log({
            error: e,
            credentials: {
                host: process.env.PG_HOST,
                database: process.env.PG_DATABASE,
                username: process.env.PG_USER,
                password: process.env.PG_PASSWORD,
            },
        })
    );

module.exports = models;