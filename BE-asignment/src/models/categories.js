import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    name: {
        type: String,
    }
}, { timestamp: true });

export default mongoose.model('Category', categorySchema)