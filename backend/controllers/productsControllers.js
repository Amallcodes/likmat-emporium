const mongoose = require('mongoose');
const {
    Product,
    Cart
} = require('../models/schemas');

// get all products

const getProducts = async (req, res) => {
    try {

        const products = await Product.find({}).sort({ createdAt: -1 });
        res.status(200).json(products);
        console.log("successfully fetched all products");

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



module.exports = {
    getProducts
}
