const User = require("../models/user-models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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


// refresh token 
// const refreshToken = async (req, res) => {
//   const { refreshToken } = req.body;
//   if (!refreshToken) return res.status(403).json({ message: "Access Denied, No Refresh Token Provided" });

//   try {
//     const { userId } = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET_KEY);
//     const user = await User.findById(userId);
//     if (!user) return res.status(403).json({ message: "User not found" });

//     const newAccessToken = jwt.sign(
//       { userId: user._id.toString(), email: user.email },
//       process.env.JWT_SECRET_KEY,
//       { expiresIn: '15m' }
//     );

//     res.status(200).json({ accessToken: newAccessToken });
//   } catch (error) {
//     res.status(403).json({ message: "Invalid Refresh Token" });
//   }
// };

module.exports = { getUser, register, home, login };
