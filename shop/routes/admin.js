const express = require('express');
const router = express.Router();
const adminController = require("../controllers/admin");

router.get('/add-product',adminController.getAddProduct);
router.get('/products',adminController.getProducts);
router.get('/edit-product/:ProductId',adminController.getEditProduct);
router.post('/edit-product',adminController.postEditProduct);
router.post('/add-product',adminController.postAddProduct);
router.post('/delete-product',adminController.postDeleteProduct);

module.exports = router;