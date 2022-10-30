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
function isCorrectLength (string, length) {
  return string.length <= length;
}


// Поиск случайного элемента в переданном массиве, функция из учебного проекта
const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

// Создание сообщения для комментария, функция частично взята из учебного проекта с разбора ДЗ
const createMessage = () => {
  Array.from({ length: getRandomPositiveInteger(1, 2)}, () => getRandomArrayElement(MESSAGES)).join('');
};

// Создание комментария, функция частично взята из учебного проекта с разбора ДЗ
const creatComment = (index) => ({
  id: index,
  // avatar генерируется случайным образом из диапазона 1-6
  avatar: `img/avatar-${getRandomPositiveInteger(1, AVATARS_COUNT)}.jpg`,
  message: createMessage(),
  name: getRandomArrayElement(NICKNAMES),
});

// Создание одного объекта - описания фотографии
const createPhoto = (_, index) => ({
  // индекс будет прокинут из Array.from при вызове
  id: (index + 1),
  // число для ссылки будет прокинуто из Array.from при вызове
  url: `photos/${index + 1}.jpg`,
  // случайное описание из массива
  description: `${getRandomArrayElement(DESCRIPTIONS)}`,
  // случайное число из заданного диапазона
  likes: getRandomPositiveInteger(LikesCount.MIN, LikesCount.MAX),
  // генерится массив с комментариями
  comments: Array.from(
    {length: getRandomPositiveInteger(0, COMMENTS_COUNT)}, creatComment
  )
});

// Создание массива с объектами
const allPhotos = () => Array.from({length: PHOTOS_COUNT}, createPhoto);

isCorrectLength(1, 140);
getRandomPositiveInteger();

allPhotos();

export {getRandomPositiveInteger, isCorrectLength, getRandomArrayElement, createPhoto, allPhotos};
