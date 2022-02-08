const category = [
    {
        catId : 1,
        display: "Laptop",
        icon : "bx bx-laptop"
    },
    {
        catId : 2,
        display: "Bàn phím",
        icon : "bx bxs-keyboard"
    },
    {
        catId : 3,
        display: "Tai nghe",
        icon : "bx bx-headphone"
    },
    {
        catId : 4,
        display: "Chuột",
        icon : "bx bx-mouse"
    }
]

const getAllCategory = () => category
const getDisplayById = (id) => category.find(category => category.catId.toString() === id.toString()).display;

const categoryData = {
    getAllCategory,
    getDisplayById
}

export default categoryData;