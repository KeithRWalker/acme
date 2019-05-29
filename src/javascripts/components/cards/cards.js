import categoriesData from '../../helpers/data/categoriesData';

import typesData from '../../helpers/data/typesData';

import products from '../products/products';

const categoryArray = [];

const initCategories = () => {
  categoriesData.loadCategories()
    .then((resp) => {
      typesData.getTypes(resp.data.categories);
      // console.error(resp.data.categories[1].name); // Ranged!!!
      // console.error(resp.data.categories[0].name); // Melee
      categoryArray.push(resp.data.categories[0], resp.data.categories[1]);
      return categoryArray;
    });
};

const sortProducts = () => {
  initCategories();
  const returnedProducts = products.initProducts();
  console.error(returnedProducts);
};

export default { sortProducts };
