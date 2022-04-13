import Product from "../models/product";
import Category from '../models/category'


export const listProduct = async (request, response) => {
    try {
        const product = await Product.find().populate('category').exec();
        // const category = await Category.find().select('name').exec();
        response.json(product);

    } catch (error) {
        console.log(error);
        response.status(400).json({message: "K tim thay data"})
    }
}

export const productDetail = async (request, response) => {
   try {
        const product = await Product.findOne({_id:request.params.id}).populate("category").exec();
        response.json(product);
   } catch (error) {
        response.status(400).json({message: "K tim thay data"})
   }
}

export const createProduct = async (request, response) =>{
    try {
        const product = await Product(request.body).save();
        if (request.body.category) {
            const category = Category.findById(request.body.category);
            await category.updateOne({$push: {product: product._id}});
        }
        response.json(product);  
    } catch (error) {
        console.log(error);
        response.status(400).json({message: "Khong the tao moi"})
    }
}

export const deleteProduct = async (request, response) => {
    try {
        const product = await Product.findOneAndDelete({_id:request.params.id}).exec();
        response.json(product);  
    } catch (error) {
        response.status(400).json({message: "Khong the xoa"})
    }
}

export const updateProduct = async (request, response) => {
    try {
        const product = await Product.findOneAndUpdate({_id:request.params.id},request.body, {new:true});
        response.json(product);
    } catch (error) {
        response.status(400).json({message: "Update khong thanh cong"})
    }
}