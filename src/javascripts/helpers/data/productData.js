import axios from 'axios';

const loadProducts = () => new Promise((resolve, reject) => {
  axios.get('../db/products.json')
    .then((resp) => {
      const allProducts = resp.data.products;
      resolve(allProducts);
    })
    .catch(err => reject(err));
});

export default { loadProducts };
