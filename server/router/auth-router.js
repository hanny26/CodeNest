const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth-controller");
const authenticate = require("../middlewares/authenticate");

// router.get("/",(req, res) =>{
//  res.status(200).send("welcome Authh Page");
// });

router.get("/getuser", authController.getUser);
router.post("/register",authenticate ,  authController.register);
router.get("/", authController.home);   
router.post("/login", authController.login);

module.exports = router;