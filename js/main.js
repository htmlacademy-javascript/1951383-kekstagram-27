
// Кол-во объектов
const FOTOS_COUNT = 25;
// Кол-во аватаров
const AVATARS_COUNT = 6;
// Кол-во id аватаров
const ID_COUNT = 1000;
// Кол-во комментариев
const COMMENTS_COUNT = 5;

// Диапазон лайков
const likesCount = {
  MIN: 15,
  MAX: 200,
};

// Текст комментария
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

// Текст подписи к фото
const DESCRIPTIONS = [
  'Пространное описание',
  'Смешное описание',
  'Описание - стихотворение',
  'Грустное описание',
  'Загадочное описание',
  'Краткое описание',
  'Описание - цитата',
  'Рекламное описание',
  'Девятое описание',
];

// Массив с значениями ключа name
const NICKNAMES = [
  'Бэтмен',
  'Человек-паук',
  'Женщина-кошка',
  'Чудо-женщина',
  'Робин',
  'Альфред',
];

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
  Array.from({ length: getRandomPositiveInteger(1, 2)}, getRandomArrayElement(MESSAGES)).join('');
};

// Создание комментария, функция частично взята из учебного проекта с разбора ДЗ
const creatComment = () => ({
  // id генерируется случайным образом из диапазона 1-1000
  id: getRandomPositiveInteger(1, ID_COUNT),
  // avatar генерируется случайным образом из диапазона 1-6
  avatar: `img/avatar-${getRandomPositiveInteger(1, AVATARS_COUNT)}.jpg`,
  message: createMessage(),
  name: getRandomArrayElement(NICKNAMES),
});

// Создание одного объекта - описания фотографии
const createFoto = () => ({
  // id генерируется случайным образом из диапазона 1-25, не знаю, как сделать его не повторяющимся
  id: getRandomPositiveInteger(1, FOTOS_COUNT),
  // число для ссылки генерируется случайным образом из диапазона 1-25, не знаю, как сделать его не повторяющимся
  url: `photos/${getRandomPositiveInteger(1, FOTOS_COUNT)}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomPositiveInteger(likesCount.MIN, likesCount.MAX),
  // здесь должен генериться массив с комментариями, но я не уверена, что тут корректно
  comments: Array.from(
    {length: getRandomPositiveInteger(0, COMMENTS_COUNT)}, creatComment()
  )
});

// Создание массива с объектами
const allFotos = Array.from({length: FOTOS_COUNT}, createFoto);

isCorrectLength();
getRandomPositiveInteger();
allFotos();
