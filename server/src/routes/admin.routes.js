const express = require("express");
const router = express.Router();
const { adminLoginHandler, adminInfo, createAdmin } = require("../controllers/admin.controller");

// Admin routes
router.post("/login", adminLoginHandler);
router.get("/info/:id", adminInfo);
router.post("/create", createAdmin);

module.exports = router;