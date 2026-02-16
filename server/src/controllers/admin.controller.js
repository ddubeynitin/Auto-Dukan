const Admin = require("../models/admin.model");
// const jwt = require("jsonwebtoken");

const adminLoginHandler = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      });
    }

    // Find admin by email
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Compare password
    if (admin.password !== password) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }
    // const isPasswordValid = await admin.matchPassword(password);
    // if (!isPasswordValid) {
    //   return res.status(401).json({
    //     success: false,
    //     message: "Invalid email or password",
    //   });
    // }

    // // Generate JWT token
    // const token = jwt.sign(
    //   { id: admin._id, email: admin.email, role: admin.role },
    //   process.env.JWT_SECRET || "your_jwt_secret_key",
    //   { expiresIn: "7d" }
    // );

    // Return success response
    return res.status(200).json({
      success: true,
      message: "Login successful",
      token: null, // Token generation is currently disabled
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred during login",
      error: error.message,
    });
  }
};

/**
 * Get Admin Info
 * GET /api/admins/info/:id
 * Fetches admin information by ID
 */
const adminInfo = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Admin ID is required",
      });
    }

    // Validate MongoDB ObjectId
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({
        success: false,
        message: "Invalid admin ID format",
      });
    }

    const admin = await Admin.findById(id).select("-password");

    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Admin not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Admin info retrieved successfully",
      admin,
    });
  } catch (error) {
    console.error("Fetch admin info error:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while fetching admin info",
      error: error.message,
    });
  }
};

/**
 * Create Admin
 * POST /api/admins/create
 * Creates a new admin account
 */
const createAdmin = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    // Validation
    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Validate name length
    if (name.trim().length < 3) {
      return res.status(400).json({
        success: false,
        message: "Name must be at least 3 characters long",
      });
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      });
    }

    // Password match validation
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match",
      });
    }

    // Password strength validation
    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters long",
      });
    }

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(409).json({
        success: false,
        message: "Admin with this email already exists",
      });
    }

    // Create new admin
    const newAdmin = new Admin({
      name: name.trim(),
      email: email.toLowerCase(),
      password,
      role: "admin",
    });

    // Save admin to database
    await newAdmin.save();

    // Generate JWT token
    const token = jwt.sign(
      { id: newAdmin._id, email: newAdmin.email, role: newAdmin.role },
      process.env.JWT_SECRET || "your_jwt_secret_key",
      { expiresIn: "7d" }
    );

    return res.status(201).json({
      success: true,
      message: "Admin created successfully",
      token,
      admin: {
        id: newAdmin._id,
        name: newAdmin.name,
        email: newAdmin.email,
        role: newAdmin.role,
      },
    });
  } catch (error) {
    console.error("Create admin error:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while creating admin",
      error: error.message,
    });
  }
};

module.exports = { adminLoginHandler, adminInfo, createAdmin };
