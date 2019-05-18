import categoriesData from '../../helpers/data/categoriesData';

import typesData from '../../helpers/data/typesData';

import util from '../../helpers/util';

const cardDisplay = (arr) => {
  let cardSt = '';
  arr.forEach((card) => {
    cardSt += '<div class="card">';
    cardSt += `<h1>${card.id}</ar>`;
    cardSt += `<h1>${card.name}</h1>`;
    cardSt += '</div>';
  });
  util.printToDom('app', cardSt);
};

const initCategories = () => {
  categoriesData.loadCategories()
    .then((cats) => {
      console.error(cats.data.categories);
      const catsA = cats.data.categories;
      cardDisplay(catsA);
    })
    .catch(err => console.error('fuck', err));
};

const initTypes = () => {
  typesData.loadTypes()
    .then((types) => {
      const typesA = types.data.types;
      cardDisplay(typesA);
    })
    .catch(err => console.error('types fuck', err));
};

export default { initCategories, initTypes };
