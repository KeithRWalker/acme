import axios from 'axios';

const getProducts = () => axios.get('../db/products.json');

export default { getProducts };
