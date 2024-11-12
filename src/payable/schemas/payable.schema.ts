import mongoose from "mongoose"

export const PayableSchema= new mongoose.Schema({
   
    value: {
        type: Number,
        default: 0
    },

    emissionDate: {
        type: Date,
        default: ""
    },

    assignor: {
        type: String,
        default: ""
    },
      
}, { timestamps: true })

