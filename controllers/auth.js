import User from '../models/users'

export const singup = async (request, response) => {
    const {email, name, password} = request.body
    try {
        const exitsUser = await User.findOne({email}).exec();
        if (exitsUser) {
            return response.status(400).json({
                message: "email da ton tai"
            })
        }
        const user = await User(request.body).save()
        response.json({
            users: {
                _id: user._id,
                email:user.email,
                name: user.name
            }
        })
    } catch (error) {
       console.log(error); 
    }
}
export const singin = () => {}
