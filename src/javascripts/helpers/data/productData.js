import Axios from 'axios';

const loadProducts = () => new Promise((resolve, reject) => {
  Axios.get('../db/products.json').then((resp) => {
    const { products: [collection] } = resp.data;
    const productArray = [];
    Object.keys(collection).forEach((item) => {
      collection[item].id = item;
      // collection[item] = a product object
      productArray.push(collection[item]);
    });
    resolve(productArray);
  }).catch(err => reject(err));
});


export default { loadProducts };
