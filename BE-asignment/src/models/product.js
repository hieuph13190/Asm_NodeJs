import mongoose from "mongoose";
const ProductSchema = mongoose.Schema({
    name: {
        type: String,
    },
    originalPrice: {
        type: Number,
    },
    image: {
        type: String,
    },
    saleOffPrice: {
        type: Number,
    },
    categoryProductId: {
        type: String,
    },
    description: {
        type: String,
    },
    shortDescription: {
        type: String,
    },
    category: {
        type: mongoose.ObjectId,
        ref: 'Category'
    }
});
export default mongoose.model('Product', ProductSchema);