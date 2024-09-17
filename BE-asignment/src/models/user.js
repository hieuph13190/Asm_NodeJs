import mongoose from 'mongoose'
import { createHmac } from "crypto"

const userSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        minlength: 6,
    },
    role: {
        type: Number,
        default: 0
    }
}, { timestamps: true })

userSchema.methods = {
    authenticate(password) {
        return this.password === this.encryPassword(password)
    },
    encryPassword: (password) => {
        if (!password) return;
        try {
            return createHmac("sha256", "jqk").update(password).digest("hex")
        } catch (error) {
            console.log(error);
        }

    }
}
userSchema.pre('save', function(next) {
    this.password = this.encryPassword(this.password);
    next()
})

export default mongoose.model("User", userSchema)