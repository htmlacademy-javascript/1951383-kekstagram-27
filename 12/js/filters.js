const filterForm = document.querySelector('.img-filters__form');
// По умолчанию
const defaultButton = filterForm.querySelector('#filter-default');
// Случайные
const randomButton = filterForm.querySelector('#filter-random');
// Обсуждаемые
const discussedButton = filterForm.querySelector('#filter-discussed');

// Смена фильтра (выбранный)
const toggleFilter = (choosen) => {
  // Находим выбранный перед новым выбором фильтр
  const currentFilter = document.querySelector('.img-filters__button--active');
  // Убираем у него класс "выбранный"
  currentFilter.classList.remove('img-filters__button--active');
  // Добавляем нашему фильтру класс "выбранный"
  choosen.classList.add('img-filters__button--active');
};

// Функция на кнопку "По умолчанию" (слушатель + cb)
const setDefaultPhotosClick = (callback) => {
  defaultButton.addEventListener('click', (evt) => {
    toggleFilter(evt.target);
    callback();
  });
};

// Функция на кнопку "Случайные" (слушатель + cb)
const setRandomPhotosClick = (callback) => {
  randomButton.addEventListener('click', (evt) => {
    toggleFilter(evt.target);
    callback();
  });
};

// Функция на кнопку "Популярные" (слушатель + cb)
const setDiscussedPhotoClick = (callback) => {
  discussedButton.addEventListener('click', (evt) => {
    toggleFilter(evt.target);
    callback();
  });
};

export {
  setDefaultPhotosClick,
  setRandomPhotosClick,
  setDiscussedPhotoClick
};
