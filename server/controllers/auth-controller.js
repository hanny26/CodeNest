const User = require("../models/user-models");
const bcrypt = require("bcryptjs");

const getUser = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json({ user: user, message: "User Fetched Successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching users" });
  }
};

const home = async (req, res) => {
  res.status(200).json({ message: "Welcome to Home Page" });
};

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const userExist = await User.findOne({ email: email });

    if (!userExist) {
      // const saltRound = await bcrypt.genSalt(10);
      // const hashPassword = await bcrypt.hash(password, saltRound);

      const user = new User({
        username,
        email,
        password,
      });

      const newUser = await user.save();
      const token = await user.generateToken();
      res.status(201).json({
        token: token,
        user: newUser,
        message: "User Added Successfully",
        userId: newUser._id.toString(),
      });
    } else {
      res.status(400).json({
        message: "User already exists",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error: " + error.message });
    // next(error);
  }
};

// User Login logic
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });
    console.log(userExist);

    if (!userExist) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const passwordValid = await bcrypt.compare(password, userExist.password);
    // const user = await userExhist.comparePassword(password);
    
    if (passwordValid) {
      res.status(201).json({
        token: await userExist.generateToken(),
        email: userExist.email,
        message: "login Successfully",
        userId: userExist._id.toString(),
      });
      console.log("login Successfully");
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
};

module.exports = { getUser, register, home, login };
