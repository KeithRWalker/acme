import productData from '../../helpers/data/productData';

import typeData from '../../helpers/data/typesData';

import categoryData from '../../helpers/data/categoriesData';

import util from '../../helpers/util';

let typesArray = [];

let categoriesArray = [];

const productArray = [];

const cardBuild = (array) => {
  let cardSt = '';
  array.forEach((product) => {
    cardSt += `<div id="${product.type}" class="card col-2 ${product.type}">`;
    cardSt += `<h2>${product.name}</h2>`;
    cardSt += `<p>${product.description}</p>`;
    cardSt += `<p>${product.categoryName}</p>`;
    cardSt += `<p>${product.typeName}</p>`;
    cardSt += '</div>';
  });
  util.printToDom('app', cardSt);
};


const smashFunction = () => {
  const products = [];
  productArray.forEach((p) => {
    const product = p;
    typesArray.forEach((type) => {
      if (product.type === type.id) {
        product.typeName = type.name;
        categoriesArray.forEach((cat) => {
          if (type.category === cat.id) {
            product.categoryName = cat.name;
          }
        });
      }
    });
    products.push(product);
  });
  cardBuild(products);
};

const initProducts = () => {
  productData.loadProducts()
    .then((resp) => {
      const product = resp;
      product.forEach((item) => {
        productArray.push(item);
      });
      smashFunction();
    });
};

const initTypes = () => {
  typeData.loadTypes()
    .then((resp) => {
      const { types } = resp.data;
      // types.forEach((type) => {
      //   typesArray.push(type);
      // });
      typesArray = types;
      initProducts();
    })
    .catch(err => console.error(err));
};

const initCategories = () => {
  categoryData.loadCategories()
    .then((resp) => {
      const { categories } = resp.data;
      // categories.forEach((category) => {
      //   categoriesArray.push(category);
      // });
      // console.error('Categories Array', categoriesArray);
      categoriesArray = categories;
      initTypes();
    })
    .catch(err => console.error(err, 'error from loadCategories'));
};

const initAll = () => {
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
