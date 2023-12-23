import axios from "../../utils/axios.config"

const fetchProduct = async () => {
    const data = await axios.get("/products");
    return data.data.products;
};

export { fetchProduct };