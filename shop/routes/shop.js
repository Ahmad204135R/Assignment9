const express = require("express");
const router=express.Router();
const shopController = require("../controllers/shop");

router.get("/",shopController.getShop);
router.post("/:userId",shopController.postShop);



module.exports = router;
