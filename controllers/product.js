import Product from "../models/product";


export const listProduct = async (request, response) => {
    try {
        const product = await Product.find().exec();
        response.json(product);

    } catch (error) {
        response.status(400).json({message: "K tim thay data"})
    }
}

export const productDetail = async (request, response) => {
   try {
        const product = await Product.findOne({_id:request.params.id}).exec();
        response.json(product);
   } catch (error) {
        response.status(400).json({message: "K tim thay data"})
   }
}

export const createProduct = async (request, response) =>{
    try {
        const product = await Product(request.body).save();
        response.json(product);  
    } catch (error) {
        response.status(400).json({message: "Khong the tao moi"})
    }
}

export const deleteProduct = async (request, response) => {
    try {
        const product = await Product.findByIdAndDelete(request.params.id).exec();
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