import User from '../models/users'

export const singup = async (request, response) => {
    const { name, email, password} = request.body;
    try {
        const check = await User.findOne({email}).exec()
        if (check) {
            return response.status(400).json({
                message: "email da ton tai"
            })
        }
        const user = await User(request.body).save()
        response.json({
            users:{
                _id: user._id,
                name: user.name,
                email: user.email
            }
        })
    } catch (error) {
        console.log(error);
    }
}
export const singin = async (request, response) => {}

export const deleteUser = async (request, response) => {
    try {
        const user = User.findOneAndDelete({}).exec()
        response.json(user)
    } catch (error) {
        response.status(400).json({message: "k xoa duoc user"})
    }
}

