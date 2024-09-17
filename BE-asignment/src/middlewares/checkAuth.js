const { expressjwt: expressJWT } = require("express-jwt")

export const requireSignin = expressJWT({
    algorithms: ["HS256"],
    secret: "123456",
    requestProperty: "auth",
})

export const isAuth = (req, res, next) => {
    const status = req.profile._id == req.auth.id
    console.log(status);
    if (status) {
        next()
    } else {
        return res.status(400).json({
            message: "Bạn không phải thành viên hệ thống"
        })
    }
}

export const isAdmin = (req, res, next) => {
    if (req.profile, role == 0) {
        return res.status(400).json({
            message: "Bạn không phải admin"
        })
    }
    next()
}