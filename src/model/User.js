const mongoose = require("mongoose");
const Schema = mongoose;

const userSchema = mongoose.Schema({
    name:{
        type: String,
        require: true,
    }

},
    {
        timestamps: true
    }
);

const User = mongoose.model("User", userSchema);
module.exports = {
    User,
    userSchema,
}