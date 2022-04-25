const { Schema , model} = require("mongoose")
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: String
    },
    mobileNo: {
        type: String,
    },
}, { timestamps: true });

module.exports =model("User", userSchema);
