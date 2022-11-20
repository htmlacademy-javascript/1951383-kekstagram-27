import {PHOTOS_COUNT, AVATARS_COUNT, COMMENTS_COUNT, LikesCount, MESSAGES, DESCRIPTIONS, NICKNAMES} from './data.js';
// Время закрытия модального окна
const ALERT_SHOW_TIME = 5000;

// Функция, возвращающая случайное целое число
function getRandomPositiveInteger (a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

// Функция на проверку длины строки
const isCorrectLength = (string, length) => string.length <= length;


// Поиск случайного элемента в переданном массиве
const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

// Создание сообщения для комментария
const createMessage = () => Array.from({ length: getRandomPositiveInteger(1, 2)}, () => getRandomArrayElement(MESSAGES)).join('');


// Создание комментария
const creatComment = (index) => ({
  id: index,
  avatar: `img/avatar-${getRandomPositiveInteger(1, AVATARS_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NICKNAMES),
});

// Создание одного объекта - описания фотографии
const createPhoto = (_, index) => ({
  id: (index + 1),
  url: `photos/${index + 1}.jpg`,
  description: `${getRandomArrayElement(DESCRIPTIONS)}`,
  likes: getRandomPositiveInteger(LikesCount.MIN, LikesCount.MAX),
  comments: Array.from(
    {length: getRandomPositiveInteger(0, COMMENTS_COUNT)}, creatComment
  )
});

// Создание массива с объектами
const getPhotos = () => Array.from({length: PHOTOS_COUNT}, createPhoto);

// Проверка на клавишу ESC
const isEscapeKey = (evt) => evt.key === 'Escape';

// Проверка на клавишу Enter
const isEnterKey = (evt) => evt.key === 'Enter';

// Функция для показа окна об ошибке загрузки
const showErrorAlert = (message) => {
  // Создаем новый элемент, задаем стиль
  const alertContainer = document.createElement('div');
  alertContainer.style.position = 'absolute';
  alertContainer.style.width = '100%';
  alertContainer.style.top = '0';
  alertContainer.style.padding = '10px 5px';
  alertContainer.style.fontSize = '22px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'Crimson';

  alertContainer.textContent = message;
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);

};

// Функция для устранения дребезга
function debounce (callback, timeoutDelay) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

// Функция для создания случайного массива
const getRandomArray = (array, countElement) => {
  if (array.length <= countElement) {
    return array;
  }

  let resultArray = [];
  while (resultArray.length !== countElement) {
    resultArray.push(getRandomArrayElement(array));
    resultArray = Array.from(new Set(resultArray));
  }
  return resultArray;
};
// Функция для метода sort (по кол-ву комментариев)
const comparePhotos = (photoA, photoB) => {
  const commentA = photoA.comments.length;
  const commentB = photoB.comments.length;
  // Сортируем по убыванию
  return commentB - commentA;
};
// Сортировка по кол-ву комментариев
const sortedByMostDiscussed = (photos) => photos.slice().sort(comparePhotos);

export {getRandomPositiveInteger, isCorrectLength, getRandomArrayElement, createPhoto, getPhotos, isEscapeKey, isEnterKey, showErrorAlert, debounce, getRandomArray, sortedByMostDiscussed};
