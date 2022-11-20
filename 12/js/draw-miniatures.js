import { openBigPhoto } from './popup-full-photos.js';
// Блок-фильтрация
const imageFilters = document.querySelector('.img-filters');

const clearPhotos = () => {
  const pictures = document.querySelectorAll('.picture');
  if (pictures.length > 0) {
    pictures.forEach((picture) => picture.remove());
  }
};


const drawSmallImages = (photos) => {
  clearPhotos();
  // записываем в переменную блок для фотографий других пользователей
  const photosContainerElement = document.querySelector('.pictures');
  // шаблон нового элемента-ссылки
  const elementTemplate = document.querySelector('#picture').content.querySelector('.picture');


  // добавление фрагмента
  const photosContainerFragmentElement = document.createDocumentFragment();

  // проходимся по массиву для добавления данных
  photos.forEach(({url, likes, comments, description}) => {
  // клонирование шаблона
    const randomPhotoElement = elementTemplate.cloneNode(true);
    // адрес изображения url подставляем как атрибут src изображения.
    randomPhotoElement.querySelector('.picture__img').src = url;
    // количество лайков likes выводим в блок .picture__likes
    randomPhotoElement.querySelector('.picture__likes').textContent = likes;
    // количество комментариев comments выводим в блок .picture__comments
    randomPhotoElement.querySelector('.picture__comments').textContent = comments.length;
    randomPhotoElement.addEventListener('click', () => {
      openBigPhoto({url, likes, comments, description });
    });

    photosContainerFragmentElement.append(randomPhotoElement);
  });
  // Показываем блок фильтрации
  imageFilters.classList.remove('img-filters--inactive');

  photosContainerElement.append(photosContainerFragmentElement);
};

export {drawSmallImages};
