import User from '../models/users'

export const userById = async (request, response, next, id) => {
    try {
        const user = User.findById(id).exec()
        if (!user) {
            response.status(400).json({
                message: "K tim thay user"
            })
        }
        request.profile = user
        request.profile.password = undefined
        next()
    } catch (error) {
        console.log(error);
    }
}