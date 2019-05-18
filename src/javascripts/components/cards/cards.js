// import categoriesData from '../../helpers/data/categoriesData';

// import typesData from '../../helpers/data/typesData';

// import productData from '../../helpers/data/productData';

// import util from '../../helpers/util';

import typesData from '../../helpers/data/typesData';

const loadProducts = () => {
  typesData.loadTypes();
};

export default { loadProducts };

// let prodAr = [];

// const cardDisplay = (ar) => {
//   let cardSt = '';
//   ar.forEach((card) => {
//     cardSt += '<div class="card">';
//     cardSt += `<h1>${card.name}</ar>`;
//     cardSt += `<h1>${card.type}</h1>`;
//     cardSt += '</div>';
//   });
//   util.printToDom('app', cardSt);
// };

// const initCategories = () => {
//   categoriesData.loadCategories()
//     .then((resp) => {
//       const catsA = resp.data.categories;
//       cardDisplay(catsA);
//     })
//     .catch(err => console.error('fuck', err));
// };

// const initTypes = () => {
//   typesData.loadTypes()
//     .then((resp) => {
//       const typesA = resp.data.types;
//       // const meleeType = typesA.filter(type => type.id === 0);
//       cardDisplay(typesA);
//     })
//     .catch(err => console.error('types fuck', err));
// };

// const initProducts = () => {
//   productData.loadProducts()
//     .then((resp) => {
//       const allProducts = resp;
//       allProducts.forEach((item) => {
//         const newAr = Object.values(item);
//         console.error(newAr);
//         cardDisplay(newAr);
//         // console.error(newAr);
//       });
//       // console.error(allProducts);
//     })
//     .catch(err => console.error('products FUCK', err));
// };

// const filterProducts = () => {
//   typesData.loadTypes()
//     .then((resp) => {
//       for (let i = 0; i <= resp.length; i += 1) {
//         const typeId = resp[i].id;
//         productData.loadProducts(typeId)
//           .then((products) => {
//             console.error(products);
//             cardDisplay(products);
//           });
//       }
//     })
//     .catch(err => console.error('error', err));
// };
