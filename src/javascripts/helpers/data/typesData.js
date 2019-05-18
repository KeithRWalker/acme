import axios from 'axios';

import categoriesData from './categoriesData';

const catType = [];

const loadCategories = () => {
  categoriesData.loadCategories()
    .then((resp) => {
      const catsA = resp.data.categories;
      console.error('loadCategories => catsA', catsA);
      catType.push(catsA);
      return catsA;
    })
    .catch(err => console.error('fuck', err));
};

const loadTypes = () => {
  axios.get('../db/types.json')
    .then((resp) => {
      const typeId = resp.data;
      console.error('loadTypes => typeId ', typeId);
      catType.push(typeId);
      loadCategories();
      console.error(catType);
    })
    .catch();
};


export default { loadTypes };
