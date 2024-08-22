const mongoose = require("mongoose");
// const schema = mongoose.Schema

const productSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    item: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    count: {
        type: Number,
        required: true
    },
    deal: {
        type: String,
        required: true
    }
});



const cartSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    item: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    count: {
        type: Number,
        required: true
    },
    deal: {
        type: String,
        required: true
    }
});


const Product = mongoose.model("Product", productSchema);
const Cart = mongoose.model("Cart", cartSchema);

module.exports = { Product, Cart };

