const mongoose = require("mongoose");
 const bcrypt = require("bcryptjs");
 const jwt = require("jsonwebtoken");
 const env = require("dotenv");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
});

// secure
userSchema.pre("save",async function(next){
   console.log("pre method", this);
  const user = this;
  
  if(!user.isModified("password")){
    next();
  }
   try {
    const saltRound = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(user.password, saltRound);
    user.password = hashPassword;
    
   } catch (error) {

    next(error);
   }
});

// compare password


// userSchema.methods.comparePassword = async function(password){
//   return  bcrypt.compare(password, this.password);
// }

// JSON Web Token
userSchema.methods.generateToken = async function(){
  try {
     return jwt.sign({
      userId : this._id.toString(),
      email: this.email,
      isAdmin: this.isAdmin,
     },
      process.env.JWT_SECRET_KEY,
      
     );

  } catch (error) {
    console.error(error);
  }
 };


// define model or the collection name
const User = mongoose.model("User", userSchema);

module.exports = User;
