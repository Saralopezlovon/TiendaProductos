const Products = require('../models/products')

const products = {
    
    getAllProducts : async (req, res) =>{
    
        try{
            const { page = 1, perPage = 10, sort ={name: 1, price:1}  } = req.query;
            const options ={
                page: parseInt(page,10),
                limit: parseInt(perPage,10),
                sort: sort

            }

            const data = await Products.paginate({}, options)
            res.status(200).json(data)

        } catch (err){
            res.status(400).json({'error':err})
        }
    },

    findNameProduct: async (req, res) =>{
        try{    
            let data

            function escapeRegex(text) {
                return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
            };

            if (req.query.nameProduct) {

                const { page = 1, perPage = 10, sort ={name: 1, price:1} } = req.query;
                const options ={
                page: parseInt(page,10),
                limit: parseInt(perPage,10),
                sort: sort
                }

                const regex = new RegExp(escapeRegex(req.query.nameProduct), 'gi');
                data = await Products.paginate({$or: [{name:regex}, {provider: regex}]}, options)
                res.status(200).json(data)
            }

        }catch(err){
            res.status(400).json({"error":err});
        }    
    }

}


module.exports = products