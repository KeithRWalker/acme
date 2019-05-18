import '../styles/main.scss';

import cards from './components/cards/cards';

const init = () => {
  cards.initCategories();
  cards.initTypes();
  cards.initProducts();
};

init();
