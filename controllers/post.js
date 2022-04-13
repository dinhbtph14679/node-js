import Post from '../models/post';

export const listPost = async (request, response) => {
    try {
        const post = await Post.find().exec();
        response.json(post);
    } catch (error) {
        response.status(400).json({
            message: "K hien thi duoc du lieu"
        })
    }
}

export const createPost = async (request, response) => {
    try {
        const post = await Post(request.body).save();
        response.json(post)
    } catch (error) {
        response.status(400).json({
            message: "K the tao moi du lieu"
        }) 
    }
}

export const listPostDetail = async (request,response) =>{
    try {
        const post = await Post.findOne({_id:request.params.id}).exec();
        response.json({post})
    } catch (error) {
        response.status(400).json({
            message: "K the hien thi moi du lieu"
        }) 
    }
    
}

export const updatePost = async (request, response) => {
    try {
        const post = await Post.findOneAndUpdate({_id:request.params.id}, request.body, {new:true});
        response.json(post)
    } catch (error) {
        response.status(400).json({
            message: "Không thể update dữ liệu"
        }) 
    }
}

export const deletePost = async (request, response) => {
    try {
        const post = await Post.findOneAndDelete({_id:request.params.id}).exec();
        response.json({
            data: post,
            message: "Xóa thành công"
        });
    } catch (error) {
        response.status(400).json({
            message: "không thể xóa được bài viết"
        }) 
    }
}
