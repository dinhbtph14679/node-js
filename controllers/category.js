import Category from '../models/category';
import Product from '../models/product'

export const listCategory = async (request, response) => {
    try {
        const category = await Category.find().exec();
        response.json(category);
    } catch (error) {
        response.status(400).json({
            message: "K hien thi duoc du lieu"
        })
    }
}

export const createCategory = async (request, response) => {
    try {
        const category = await Category(request.body).save();
        response.json(category)
    } catch (error) {
        response.status(400).json({
            message: "K the tao moi du lieu"
        }) 
    }
}

export const listCategoryDetail = async (request,response) =>{
    try {
        const category = await Category.findOne({_id:request.params.id}).exec();
        const product = await Product.find({category}).select('name').exec()
        response.json({ category,product})
    } catch (error) {
        response.status(400).json({
            message: "K the hien thi moi du lieu"
        }) 
    }
    
}
export const updateCategory = async (request, response) => {
    try {
        const category = await Category.findOneAndUpdate({_id:request.params.id}, request.body, {new:true});
        response.json(category)
    } catch (error) {
        response.status(400).json({
            message: "K the hien thi moi du lieu"
        }) 
    }
}

export const deleteCategory = async (request, response) => {
    try {
        const category = await Category.findOneAndDelete({_id:request.params.id}).exec();
        response.json(category);
    } catch (error) {
        response.status(400).json({
            message: "K the xoa danh muc"
        }) 
    }
}
