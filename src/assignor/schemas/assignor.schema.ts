import mongoose from "mongoose";

export const AssignorSchema = new mongoose.Schema({

    document: {
        type: String,
        default: ""
    },

    email: {
        type: String,
        default: ""
    },

    phone: {
        type: String,
        default: ""
    },

    name: {
        type: String,
        default: ""
    },

   
}, { timestamps: true })