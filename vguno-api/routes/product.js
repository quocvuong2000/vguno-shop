const router = require("express").Router();

const Product = require("../models/Product");

// ADD PRODUCT
router.post("/", async (req, res) => {
  // const newProduct = new Product({
  //     title : req.body.title,
  //     description : req.body.description,
  //     price : req.body.price,
  //     image : req.body.image,
  //     category :req.body.category,
  //     brand : req.body.brand,
  //     quantity : req.body.quantity,
  //     status : req.body.status
  // });

  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

// FIND PRODUCT - no need because manipulate in client side
// GET PRODUCT
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
});

// UPDATE PRODUCT
router.put("/:id", async (req, res) => {
  try {
    const updateProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

// DELETE PRODUCT
router.delete('/:id', async (req,res)=> {
    try {
        const deleteProduct = await Product.findByIdAndDelete(req.params.id);
        res.status(200).json(deleteProduct);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;
