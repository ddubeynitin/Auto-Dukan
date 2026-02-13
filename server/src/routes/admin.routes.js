const express = require("express");
const router = express.Router();
const { adminLoginHandler, adminInfo, createAdmin } = require("../controllers/admin.controller");

// Admin routes
router.post("/admins/login", adminLoginHandler);
router.get("/admins/info/:id", adminInfo);
router.post("/admins/create", createAdmin);

module.exports = router;