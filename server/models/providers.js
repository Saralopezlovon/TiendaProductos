const mongoose = require('mongoose');

const objectSchema = {
    id: {type: Number},
    name: {type: String},
    CIF: {type: String},
    address: {type: String}
};

const providersSchema = mongoose.Schema(objectSchema);

const Providers = mongoose.model('Providers', providersSchema);

module.exports = Providers;