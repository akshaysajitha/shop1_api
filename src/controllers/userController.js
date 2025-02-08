const User = require("../models/userModel");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.getByEmail(email);
        if (existingUser) return res.status(400).json({ error: "Email already exists" });

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Save user
        await User.create(name, email, hashedPassword);
        res.status(201).json({ message: "User registered successfully" });

    } catch (error) {
        res.status(500).json({ error: "Internal Server Error jjjjjjjjj" });
    }
};
