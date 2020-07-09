const Product = require('../database/models/productModel')

module.exports.createProduct = async (serviceData) => {
    // let product = new Product({
    //     name: serviceData.name,
    //     price: serviceData.price,
    //     brand: serviceData.brand
    // })
    try {
        let product = new Product({ ...serviceData });
        let result = await product.save();
        return result.toObject();
    } catch (error) {
        console.log('Something went wrong: Service: createProduct', error)
        throw new Error(error);
    }
}