import mongoose from "mongoose";
import * as bcrypt from "bcrypt";

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

UserSchema.pre('save', async function (next) {
    try {
        if (!this.isModified('password')) {
            return next();
        }
        this['password'] = await bcrypt.hash(this['password'], 10)
    } catch (error) {
        return next(error);
    }
})

UserSchema.pre('findOneAndUpdate', async function (next) {
    const updatedFields = this.getUpdate();

    if (updatedFields['password']) {
        try {
            const hashedPassword = await bcrypt.hash(updatedFields['password'], 10);
            updatedFields['password'] = hashedPassword;
        } catch (err) {
            return next(err);
        }
    }

    next();
});

UserSchema.pre('updateOne', async function (next) {
    const updatedFields = this.getUpdate();

    if (updatedFields['password']) {
        try {
            const hashedPassword = await bcrypt.hash(updatedFields['password'], 10);
            updatedFields['password'] = hashedPassword;
        } catch (err) {
            return next(err);
        }
    }

    next();


});