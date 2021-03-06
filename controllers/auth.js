import User from '../models/users'
import jwt from 'jsonwebtoken'

export const singup = async (request, response) => {
    const { email, name, password } = request.body
    try {
        const exitsUser = await User.findOne({ email }).exec();
        if (exitsUser) {
            return response.status(400).json({
                message: "Email da ton tai"
            })
        }
        const user = await User(request.body).save()
        response.json({
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        })
    } catch (error) {
        console.log(error);
    }
}

export const singin = async (request, response) => {
    const { email, password } = request.body
    try {
        const user = await User.findOne({ email }).exec();
        if (!user) {
            return response.status.json({
                message: "User khong ton tai!"
            })
        }
        if (!user.authenticate(password)) {
            return response.status(400).json({
                message: "Mat khau khong dung"
            })
        }
        const token = jwt.sign({ _id: user._id }, "123456", { expiresIn: '1h' })
        return response.json({
            token,
            user: {
                _id: user._id,
                email: user.email,
                name: user.name,
                role: user.role
            }
        })
    } catch (error) {
        response.status(400).json({
            message: "Dang nhap that bai"
        })
    }
}


