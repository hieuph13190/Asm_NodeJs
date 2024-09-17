import User from "../models/user"

export const userById = async(req, res, next, id) => {
    try {
        const user = await User.findById(id).exec()
        if (!user) {
            return res.status(400).json({
                message: "Khong tim thay user"
            })
        }
        console.log('user', user);
        user.password = undefined;
        req.profile = user
        next()
        console.log("req.profile", req.profile);
    } catch (error) {

    }
}

export const post = async(req, res) => {
    try {
        const user = await new User(req.body).save()
        res.json(user)
    } catch (error) {
        res.status(400).json({
            message: "Không thêm được người dùng"
        })
    }
}
export const list = async(req, res) => {
    try {
        const listuser = await User.find()
        res.json(listuser)
    } catch (error) {
        res.status(400).json({
            message: "Không tìm được người dùng"
        })
    }
}
export const update = async(req, res) => {
    try {
        const Updateuser = await User.findByIdAndUpdate(req.params.id, req.body)
        res.json(Updateuser)
    } catch (error) {
        res.status(400).josn({
            message: "Khong cap nhat duoc"
        })
    }
}
export const read = async(req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.json(user)
    } catch (error) {
        res.status(400).json({
            message: "Khong tìm dược người dùng"
        })
    }
}
export const remove = async(req, res) => {
    try {
        const removeUser = await User.findByIdAndDelete(req.params.id)
        res.josn(removeUser)
    } catch (error) {
        res.status(400).json({
            message: "Khong xóa dược"
        })
    }
}