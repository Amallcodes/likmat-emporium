const express = require('express');
const {
    getProducts
} = require('../controllers/productsControllers');

// declare express router
const router = express.Router();

// declare all route paths
router.get("/", getProducts);

// export routers
module.exports = router;