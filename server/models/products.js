const mongoose = require('mongoose');
const objectSchema = {
    id: {
        type: Number     
    },
    name: {
        type: String    
    },
    rating: {
        type: String  
    },
    price: {
        type: Number
    },
    image: {
        type: String
    },
    provider: {
        type: String
    } 
};

const productsSchema = mongoose.Schema(objectSchema);

const Products = mongoose.model('Products', productsSchema);

module.exports = Products;