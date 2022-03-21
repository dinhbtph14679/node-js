import Category from '../models/category';
import Product from '../models/product';

export const createCategory = async (request, response) => {
    try {
        const category =  await Category(request.body).save();
        response.json(category);
    } catch (error) {
        response.status(400).json({
            message: "k THE TAO MOI"
        })
    }
}


export const listCategory = async (request, response) =>{
    try {
        const category = await Category.find().exec();
        response.json(category);
    } catch (error) {
        response.status(400).json({
            message: "K the hien thi"
        })
    }
}
export const listCategoryDetail =  async (request, response) => {
    try {
        const category = await Category.findOne({_id:request.params.id}).exec();
        // const product = await Product.find({category}).exec();
        // const product = await Product.find({category}).populate("category").exec();
        const product = await Product.find({category}).select("-category").exec();
        response.json({
            category,product
        })
    } catch (error) {
        response.status(400).json({
            message: "K the hien thi"
        })
    }
}

export const updateCategory = async (request, response) => {
    try {
        const category = await Category.findOneAndUpdate({_id:request.params.id}, request.body, {new:true});
        const product = await Product.findByIdAndUpdate({category:request.params.id},{category}, {new:true})
        response.json({category, product})
    } catch (error) {
        response.status(400).json({
            message: "K the update"
        })
    }
}
export const deleteCategory = async (request, response) => {
    try {
        const category = await Category.findOneAndDelete({}).exec();
        response.json(category)
    } catch (error) {
        response.status(400).json({
            message: "K the xoa"
        })
    }
}
