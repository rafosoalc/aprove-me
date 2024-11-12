import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        default: ""
    },

    email: {
        type: String,
        default: ""
    },

    password: {
        type: String,
        default: ""
    },

    actived: {
        type: Boolean,
        default: true
    },

   
}, { timestamps: true })