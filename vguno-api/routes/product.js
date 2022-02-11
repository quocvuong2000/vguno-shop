const router = require("express").Router();

const Product = require("../models/Product");

router.post('/', async (req,res)=> {
    const newProduct = new Product({
        title : req.body.title,
        description : req.body.description,
        price : req.body.price,
        image : req.body.image,
        category :req.body.category,
        brand : req.body.brand,
        quantity : req.body.quantity,
        status : req.body.status
    });
    try {
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;