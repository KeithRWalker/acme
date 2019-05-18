import categoriesData from '../../helpers/data/categoriesData';

import util from '../../helpers/util';

const cardDisplay = (arr) => {
  let cardSt = '';
  arr.forEach((card) => {
    cardSt += `<h1>${card.id}</ar>`;
    cardSt += `<h1>${card.name}</h1>`;
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

export default { initCategories };
