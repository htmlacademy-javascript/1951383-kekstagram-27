import {PHOTOS_COUNT, AVATARS_COUNT, COMMENTS_COUNT, LikesCount, MESSAGES, DESCRIPTIONS, NICKNAMES} from './data.js';

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

export {getRandomPositiveInteger, isCorrectLength, getRandomArrayElement, createPhoto, getPhotos, isEscapeKey, isEnterKey};
