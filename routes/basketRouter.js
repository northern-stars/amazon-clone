const { Router } = require("express");
const authCheck = require("../middlewares/auth/authCheck");
const {
  get_basket,
  add_basket,
  update_basket,
  delete_basket,
} = require("../controllers/basketController");
const router = Router();

router.get("/", authCheck, get_basket);

router.post("/add", authCheck, add_basket);

router.put("/update/:id", authCheck, update_basket);

router.delete("/delete/:id", authCheck, delete_basket);

module.exports = router;
