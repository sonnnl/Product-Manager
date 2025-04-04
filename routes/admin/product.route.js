const express = require("express");
const controller = require("../../controllers/admin/product.controller");
const router = express.Router();
router.get("/", controller.product);
router.patch("/change-status/:status/:id", controller.changeStatus); //phuong thuc http patch, status va id la 2 tham so dong
router.patch("/change-multi", controller.changeMulti);
module.exports = router;
