const { Router } = require("express");
const authCheck = require("../middlewares/auth/authCheck");
const {
 addProduct, getBasket, removeProduct
} = require("../controllers/basketController");
const router = Router();

router.get("/",authCheck, getBasket );

router.get("/add/:id",authCheck, addProduct);

router.get("/remove/:id",authCheck, removeProduct);

module.exports = router;