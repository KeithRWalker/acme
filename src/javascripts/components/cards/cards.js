import categoriesData from '../../helpers/data/categoriesData';

import typesData from '../../helpers/data/typesData';

import productData from '../../helpers/data/productData';

import util from '../../helpers/util';

const cardDisplay = (ar) => {
  let cardSt = '';
  ar.forEach((card) => {
    cardSt += '<div class="card">';
    cardSt += `<h1>${card.id}</ar>`;
    cardSt += `<h1>${card.name}</h1>`;
    cardSt += '</div>';
  });
  util.printToDom('app', cardSt);
};

const initCategories = () => {
  categoriesData.loadCategories()
    .then((resp) => {
      const catsA = resp.data.categories;
      cardDisplay(catsA);
    })
    .catch(err => console.error('fuck', err));
};

const initTypes = () => {
  typesData.loadTypes()
    .then((resp) => {
      const typesA = resp.data.types;
      cardDisplay(typesA);
    })
    .catch(err => console.error('types fuck', err));
};

const initProducts = () => {
  productData.getProducts()
    .then((resp) => {
      const allProducts = resp.data.products;
      console.error(allProducts);
    })
    .catch(err => console.error('products FUCK', err));
};

export default { initCategories, initTypes, initProducts };
