import User from '../models/users'

export const userById = async (req, res, next, id) => {
    try {
        const user = await User.findById(id).exec()
        if (!user) {
            response.status(400).json({
                message: "K tim thay user"
            })
        }
        req.profile = user
        req.profile.password = undefined
        next();
    } catch (error) {
        console.log(error);
    }
}