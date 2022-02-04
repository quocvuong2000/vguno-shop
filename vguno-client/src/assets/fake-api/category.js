const category = [
    {
        catId : 1,
        display: "Laptop",
    },
    {
        catId : 2,
        display: "Bàn phím",
    },
    {
        catId : 3,
        display: "Tai nghe",
    },
    {
        catId : 4,
        display: "Chuột",
    }
]

const getAllCategory = () => category
const getDisplayById = (id) => category.find(category => category.catId.toString() === id.toString()).display;

const categoryData = {
    getAllCategory,
    getDisplayById
}

export default categoryData;