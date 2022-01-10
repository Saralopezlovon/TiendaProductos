const Products = require('../models/products')

const products = {
    
    getAllProducts : async (req, res) =>{
    
        try{

            await Products.updateMany(
                { 'price' : { $type: 2 } },
                [{ $set: { 'price': { $toDouble: "$price" } } }]
            )

            if(req.query.name){
                
                //http://localhost:4000/?perPage=5&page=2&name=1
                const { page = 1, perPage = 10, name} = req.query;
                const options ={
                    page: parseInt(page,10),
                    limit: parseInt(perPage,10),
                    sort: {name},
                    populate: {path:'id_provider'},
                    select: '-_id'

                }
                const data = await Products.paginate({}, options)
                res.status(200).json(data)

            }else if(req.query.rating){

                //http://localhost:4000/?perPage=5&page=2&rating=1
                const { page = 1, perPage = 10, rating} = req.query;
                const options ={
                    page: parseInt(page,10),
                    limit: parseInt(perPage,10),
                    sort: {rating},
                    populate: {path:'id_provider'},
                    select: '-_id'
                }
                const data = await Products.paginate({}, options)
                res.status(200).json(data)

            }else if(req.query.price){

                //http://localhost:4000/?perPage=5&page=2&price=1
                const { page = 1, perPage = 10, price} = req.query;
                const options ={
                    page: parseInt(page,10),
                    limit: parseInt(perPage,10),
                    sort: {price},
                    populate: {path:'id_provider'},
                    select: '-_id'
                }
                const data = await Products.paginate({}, options)
                res.status(200).json(data)

            }else{

                //http://localhost:4000/?perPage=5&page=2
                const { page = 1, perPage = 10} = req.query;
                const options ={
                    page: parseInt(page,10),
                    limit: parseInt(perPage,10),                    
                    populate: {path:'id_provider'},
                    select: '-_id'
                }
                const data = await Products.paginate({},options)
                res.status(200).json(data)

            }

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

            if (req.query.nameProduct && req.query.name) {

                //http://localhost:3000/products/search?nameProduct=silla&name=1
                const { page = 1, perPage = 10, name} = req.query;
                const options ={
                page: parseInt(page,10),
                limit: parseInt(perPage,10),
                sort: {name}
                }

                const regex = new RegExp(escapeRegex(req.query.nameProduct), 'gi');
                data = await Products.paginate({$or: [{name:regex}, {provider: regex}]}, options)
                res.status(200).json(data)

            }else if(req.query.nameProduct && req.query.rating) {

                //http://localhost:3000/products/search?nameProduct=silla&rating=1
                const { page = 1, perPage = 10, rating} = req.query;
                const options ={
                page: parseInt(page,10),
                limit: parseInt(perPage,10),
                sort: {rating}
                }

                const regex = new RegExp(escapeRegex(req.query.nameProduct), 'gi');
                data = await Products.paginate({$or: [{name:regex}, {provider: regex}]}, options)
                res.status(200).json(data)

            }else if(req.query.nameProduct && req.query.price) {

                //http://localhost:3000/products/search?nameProduct=silla&price=1
                const { page = 1, perPage = 10, price} = req.query;
                const options ={
                page: parseInt(page,10),
                limit: parseInt(perPage,10),
                sort: {price}
                }

                const regex = new RegExp(escapeRegex(req.query.nameProduct), 'gi');
                data = await Products.paginate({$or: [{name:regex}, {provider: regex}]}, options)
                res.status(200).json(data)

            }else{

                const { page = 1, perPage = 10} = req.query;
                const options ={
                page: parseInt(page,10),
                limit: parseInt(perPage,10)
                }

                const regex = new RegExp(escapeRegex(req.query.nameProduct), 'gi');
                data = await Products.paginate({$or: [{name:regex}, {provider: regex}]}, options)
                res.status(200).json(data)

            }

        }catch(err){
            res.status(400).json({"error":err});
        }    
    },

    findIdProduct : async (req, res) =>{
        try{ 
            const options ={
                populate: {path:'id_provider'},
                 select: '-_id'
            }

            let idSearched = parseInt(req.query.id, 10)
            
            const data = await Products.paginate({id: idSearched}, options)
                res.status(200).json(data)


        }catch(err){
            console.log(err)
        }
    }

}


module.exports = products