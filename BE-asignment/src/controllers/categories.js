import Category from "../models/categories";
import Product from "../models/product";

export const add = async(req, res) => {
    try {
        const category = await new Category(req.body).save();
        res.json(category);
    } catch (error) {
        res.status(400).json({
            error: 'Không thêm được danh mục'
        })
    }
}
export const list = async(req, res) => {
    try {
        const category = await Category.find().exec()
        res.json(category);
    } catch (error) {
        res.status(400).json({
            error: 'Không tìm được danh mục'
        })
    }
}
export const read = async(req, res) => {
    try {
        const category = await Category.findOne({ _id: req.params.id }).exec();
        const products = await Product.find({ category: category }).populate('category').select("-category").exec();
        res.json({
            category,
            products
        });
    } catch (error) {
        res.status(400).json({
            error: 'Không tìm được danh mục'
        })
    }
}
export const update = async(req, res) => {
    try {
        const updateCategory = await Category.findByIdAndUpdate(req.params.id, req.body)
        res.json(updateCategory)
    } catch (error) {
        res.status(400).json({
            message: "Khong cap nhat duoc"
        })
    }
}
export const remove = async(req, res) => {
    try {
        const removeCategory = await Category.findByIdAndDelete(req.params.id)
        res.json(removeCategory)
    } catch (error) {
        res.status(400).json({
            message: "Khong xoa duoc"
        })
    }
}