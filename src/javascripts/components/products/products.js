import productData from '../../helpers/data/productData';

import typeData from '../../helpers/data/typesData';

import categoryData from '../../helpers/data/categoriesData';

import util from '../../helpers/util';

const typesArray = [];

const categoriesArray = [];

const productArray = [];

const cardBuild = (array) => {
  let cardSt = '';
  array.forEach((product) => {
    cardSt += `<div id="${product.type}" class="card col-2 ${product.type}">`;
    cardSt += `<h2>${product.name}</h2>`;
    cardSt += `<p>${product.description}</p>`;
    cardSt += '</div>';
  });
  util.printToDom('app', cardSt);
};

const initProducts = () => {
  productData.loadProducts()
    .then((resp) => {
      const product = resp;
      product.forEach((item) => {
        productArray.push(item);
      });
      cardBuild(productArray);
      console.error('Products Array', productArray);
    });
};

const initTypes = () => {
  typeData.loadTypes()
    .then((resp) => {
      const { types } = resp.data;
      types.forEach((type) => {
        typesArray.push(type);
      });
      console.error('Types Array', typesArray);
    })
    .catch(err => console.error(err));
};

const initCategories = () => {
  categoryData.loadCategories()
    .then((resp) => {
      const { categories } = resp.data;
      categories.forEach((category) => {
        categoriesArray.push(category);
      });
      console.error('Categories Array', categoriesArray);
    })
    .catch(err => console.error(err, 'error from loadCategories'));
};

const initAll = () => {
  initProducts();
  initTypes();
  initCategories();
};

// const test = () => {
//   productData.loadProducts()
//     .then((productsResp) =>{
//       products = productsResp;
//       typeData.loadTypes()
//         .then((typesResp) => {
//           types = typesResp;
//           categoryData.loadCategories()
//             .then((categoryResp) => {
//               categories = categoryResp;
//             });
//         })
//     })
//     .catch(err => console.error(err, 'poop'));
// };

export default { initAll };
