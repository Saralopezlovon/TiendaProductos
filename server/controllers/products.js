const Products = require('../models/products')

const products = {
    

    getAllProducts : async (req, res) =>{
    
        try{
            const data = await Products.find({})
            res.status(200).json(data)

        } catch (err){
            res.status(400).json({'error':err})
        }
    },

    // findNameProduct: async (req, res) =>{

    //     try{            
    //         data = await Products.find({name : req.query.nameProduct})
    //         res.status(200).json(data)

    //     } catch (err){
    //         res.status(400).json({'error':err})
    //     }
    // },

    findNameProduct: async (req, res) =>{
        try{
    
            let data

            function escapeRegex(text) {
                return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
            };

            if (req.query.nameProduct) {
                const regex = new RegExp(escapeRegex(req.query.nameProduct), 'gi');
                data = await Products.find({$or: [{name:regex}, {provider: regex}]})
                res.status(200).json(data)
            }

        }catch(err){
            res.status(400).json({"error":err});
        }
    
    }

}


module.exports = products