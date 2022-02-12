const router = require("express").Router();

const Brand = require("../models/Brand");

//ADD BRAND
router.post("/", async (req, res) => {
  const brand = new Brand(req.body);

  try {
    const brandSave = await brand.save();
    res.status(200).json(brandSave);
  } catch (error) {
    res.status(500).json(error);
  }
});

//DELETE BRAND
router.delete("/:id", async (req, res) => {
  try {
    const deleteBrand = await Brand.findByIdAndDelete(req.params.id);
    res.status(200).json(deleteBrand);
  } catch (error) {
    res.status(500).json(error);
  }
});

//UPDATE BRAND
router.put("/:id", async (req, res) => {
  try {
    const updateBrand = await Brand.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateBrand);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET BRAND
router.get('/', async (req,res) => {
    try {
        const brands = await Brand.find();
        res.status(200).json(brands);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;