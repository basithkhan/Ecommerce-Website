const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please Enter Your Name"],
        maxLength:[30,"Your Name Cannot Exceed More Than 30 Characters"],
        minLength:[4,"Your Name Should Atleast Have More Than 5 Characters"]
    },
    email:{
        type:String,
        required:[true,"Please Enter An Email ID"],
        unique:true,
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    },
    password:{
        type:String,
        required:true,
        minLength:[8,"Your Password Should Atleast Have More Than 8 Characters"],
        select:false
    },
    avatar:{
        public_id:{type:String,required:false},
        url:{type:String,required:false}
    },
    role:{
        type:String,
        default:"user",
        enum:["user","admin"],
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
});

userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next();
    };
    this.password= await bcrypt.hash(this.password,10);
});

// JWT TOKEN
userSchema.methods.getJWTToken = function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRE,
    })
}

//compare password
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

//Generation Reset Password Token
userSchema.methods.getResetPasswordToken = function (){
    //generating token
    const resetToken = crypto
    .randomBytes(20)
    .toString("hex");

    //hashing and adding resetpasswordtoken to userschema
    this.resetPasswordToken = crypto
    .createHash("sha256").update(resetToken).digest("hex");

    this.resetPasswordExpire = Date.now()+15*60*1000;

    return resetToken;
}

module.exports = mongoose.model("User",userSchema);