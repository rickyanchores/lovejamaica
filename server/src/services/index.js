const mainRoute = require("express").Router();

//SERVICES IMPORTS
const productRoute = require("./products/index")

//SERVICES ENDPOINTS
mainRoute.use('/products', productRoute)

//EXPORT
module.exports = mainRoute;