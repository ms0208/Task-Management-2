const User = require('../model/usermodel.js');

const signup = async (req, resp) => {
    try {
        const { name, email, password, cp } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return resp.status(400).json({ message: "User email already exists" });
        }

        // Check if passwords match
        if (password !== cp) {
            return resp.status(400).json({ message: "Password and Confirm Password do not match" });
        }

        // Create new user
        const newUser = new User({
            name,
            email,
            password,
            cp
        });

        // Save user to database
        await newUser.save();
        return resp.status(201).json({ message: "Registration successful" });

    } catch (error) {
        return resp.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

const login = async (req, resp) => {
    try {
        const { email, password } = req.body;
        const exist = await User.findOne({ email });
        const userpassword = await User.findOne({password});
        if (!exist) {
            return resp.status(400).json({ message: "User is not exist kindly signup" });
        }
        if (!userpassword) {
            return resp.status(400).json({ message: "User password is not match" });
        }
        return resp.status(200).json({ message: "User is succesfully login" });
    } catch (error) {
        return resp.status(500).json({ message: "Internal server error", error: error.message });
    }

}
module.exports = { signup, login };
