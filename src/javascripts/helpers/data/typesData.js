import axios from 'axios';

// const getTypes = categories => new Promise((resolve, reject) => {
//   axios.get('../db/types.json')
//     .then((resp) => {
//       const { types } = resp.data;
//       const filterCategories = categories.map((category) => {
//         const newCategory = category;
//         const matchingType = types.filter(type => type.category === category.id);
//         newCategory.id = matchingType;
//         return newCategory;
//       });
//       resolve(filterCategories);
//     })
//     .then(() => {
//       axios.get('../db/products.json')
//         .then((pro) => {
//           const { products: [collection] } = pro.data;
//           const productArray = [];
//           Object.keys(collection).forEach((item) => {
//             collection[item].id = item;
//             productArray.push(collection[item]);
//           });
//           resolve(productArray);
//         });
//     })
//     .catch(err => reject(err));
// });

const loadTypes = () => axios.get('../db/types.json');

export default { loadTypes };
