import Category from "../models/category";

export const listCategory = async (request, response) => {
    try {
        const category = await Category.find().exec();
        response.json(category);
    } catch (error) {
        response.status(400).json({
            massege: "K the hien thi"
        })
    }
}

export const listCategoryDetail = async (request, response) => {
    try {
        const category = await Category.findOne({_id:request.params.id}).exec();
        response.json(category);
    } catch (error) {
        response.status(400).json({
            massege: "K the hien thi"
        })
    }
}

export const createCategory = async (request, response) => {
    try {
        const category = await Category(request.body).save();
        response.json(category);
    } catch (error) {
        response.status(400).json({
            massege: "k the tao moi"
        })
    }
}

export const deleteCategory = async (request, response) => {
    try {
        const category = await Category.findOneAndDelete({}).exec();
        response.json(category);
    } catch (error) {
        response.status(400).json({
            massege: "K the xoa"
        })
    }
}

export const updateCategory = async (request, response) => {
    try {
        const category = await Category.findOneAndUpdate({_id:request.params.id},request.body,{new:true});
        response.json(category);
    } catch (error) {
        response.status(400).json({
            massege: "k the update"
        })
    }
}