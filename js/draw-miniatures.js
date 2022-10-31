
const drawImages = function (photos) {
  // записываем в переменную блок для фотографий других пользователей
  const photosContainer = document.querySelector('.pictures');
  // шаблон нового элемента-ссылки
  const elementTemplate = document.querySelector('#picture').content.querySelector('.picture');


  // добавление фрагмента
  const photosContainerFragment = document.createDocumentFragment();

  // проходимся по массиву для добавления данных
  photos.forEach(({url, likes, comments}) => {
  // клонирование шаблона
    const randomPhotoElement = elementTemplate.cloneNode(true);
    // адрес изображения url подставляем как атрибут src изображения.
    randomPhotoElement.querySelector('.picture__img').src = url;
    // количество лайков likes выводим в блок .picture__likes
    randomPhotoElement.querySelector('.picture__likes').textContent = likes;
    // количество комментариев comments выводим в блок .picture__comments
    randomPhotoElement.querySelector('.picture__comments').textContent = comments.length;

    photosContainerFragment.append(randomPhotoElement);
  });

  photosContainer.append(photosContainerFragment);
};

export {drawImages};
