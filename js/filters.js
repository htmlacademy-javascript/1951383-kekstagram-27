import {drawSmallImages} from './draw-miniatures.js';
import {sortByComments, shuffle, debounce} from './util.js';

const TIMEOUT_DELAY = 500;
const COUNT_RANDOM_PHOTO = 10;

const cardFilters = document.querySelector('.img-filters');
const cardFiltersForm = cardFilters.querySelector('.img-filters__form');
const buttonDefaultElement = document.querySelector('#filter-default');
const buttonRandomElement = document.querySelector('#filter-random');
const buttonDiscussedElement = document.querySelector('#filter-discussed');

let currentFilter = buttonDefaultElement;

// Отрисовка фотографий по клику
const getFilteredPictures = (cards) => {

  switch (currentFilter) {
    case buttonDefaultElement:
      return cards;

    case buttonRandomElement:
      return shuffle(cards.slice()).slice(0, COUNT_RANDOM_PHOTO);

    case buttonDiscussedElement:
      return cards.slice().sort(sortByComments);


    default: return cards;
  }
};

// Функция для смены фильтра для обработчика
const onFilterClick = (evt, cards) => {
  const pictureElements = document.querySelectorAll('.picture');
  currentFilter.classList.remove('img-filters__button--active');
  currentFilter = evt.target;
  currentFilter.classList.add('img-filters__button--active');

  pictureElements.forEach((element) => {
    element.remove();
  });
  drawSmallImages(getFilteredPictures(cards));
};

// Обработчик событий по смене фильтра
const changeFilter = (cards) => {
  cardFiltersForm.addEventListener('click',
    debounce((evt) => {
      onFilterClick(evt, cards);
    }, TIMEOUT_DELAY),
  );
};

export {changeFilter};
