const router = require("express").Router();

const Category = require("../models/Category");

//ADD CATEGORY
router.post("/", async (req, res) => {
  const newCat = new Category(req.body);

  try {
    const savedCat = await newCat.save();

    res.status(201).json(savedCat);
  } catch (error) {
    res.status(500).json(error);
  }
});

//DELETE CATEGORY
router.delete("/:id", async (req, res) => {
  try {
    const deleteCat = await Category.findByIdAndDelete(req.params.id);
    res.status(200).json(deleteCat);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET CATEGORY
router.get("/", async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
