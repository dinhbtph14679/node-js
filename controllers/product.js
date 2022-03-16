import Product from "../models/product";



// const products = [
//     {
//         "id": 1,
//         "name": "dinh dep trai"
//     },
//     {
//         "id": 2,
//         "name": "dinh dep trai sieu cap vip pro"
//     }
// ]

export const listProduct = (request, response) => {
    try {
        const product = Product.find().exec();
        response.json(product);

    } catch (error) {
        response.status(400).json({message: "K tim thay data"})
    }
    // response.json(products);
}
export const productDetail = (request, response) => {
    const product = products.find(item => item.id === +request.params.id);
    response.json(product);
}

export const createProduct = (request, response) =>{
    products.push(request.body);
    response.json(products);
}

export const deleteProduct = (request, response) => {
    const product = products.filter(item => item.id != request.params.id);
    response.json(product);
}

export const updateProduct = (request, response) => {
    response.json(products.map(item => item.id === +request.params.id ? request.body : item))
}