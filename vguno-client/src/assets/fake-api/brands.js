const brands = [
  {
    brandId: 1,
    display: "Asus",
  },
  {
    brandId: 2,
    display: "Msi",
  },
  {
    brandId: 3,
    display: "Logitech",
  },
  {
    brandId: 4,
    display: "Apple",
  },
  {
    brandId: 5,
    display: "JBL",
  },
];

const getAllBrands = () => brands;
const getDisplayById = (id) =>  brands.find(brand => brand.brandId.toString() === id.toString()).display;

const brandData = {
  getAllBrands,
  getDisplayById
}
export default brandData;
