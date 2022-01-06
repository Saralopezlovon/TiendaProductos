const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate')
const Providers = require('./providers')

const objectSchema = {
    id: {type: Number},
    name: {type: String},
    rating: {type: String},
    price: {type: Number},
    image: {type: String},
    provider: {type: String},
    id_provider: {type: mongoose.Schema.ObjectId, ref: "Providers"}
};

const productsSchema = mongoose.Schema(objectSchema);

productsSchema.plugin(mongoosePaginate);

const Products = mongoose.model('Products', productsSchema);

module.exports = Products;