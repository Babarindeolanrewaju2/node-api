const Product = require('../database/models/productModel')

module.exports.createProduct = async (serviceData) => {
    // let product = new Product({
    //     name: serviceData.name,
    //     price: serviceData.price,
    //     brand: serviceData.brand
    // })
    try {
        let product = new Product({ ...serviceData });
        return await product.save();
    } catch (error) {
        console.log('Something went wrong: Service: createProduct', error)
        throw new Error(error);
    }
}