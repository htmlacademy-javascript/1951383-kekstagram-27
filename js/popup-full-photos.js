import {isEscapeKey} from './util.js';

const body = document.querySelector('body');

const bigPicture = document.querySelector('.big-picture');

const cancelBigPicture = bigPicture.querySelector('.big-picture__cancel');

const bigPreview = document.querySelector('.big-picture__img img');
const bigLikes = bigPicture.querySelector('.likes-count');

const bigComments = bigPicture.querySelector('.comments-count');
const commentsList = bigPicture.querySelector('.social__comments');
const commentTemplate = bigPicture.querySelector('.social__comment');

const bigDescription = bigPicture.querySelector('.social__caption');
const commentCount = bigPicture.querySelector('.social__comment-count');
const commentLoader = bigPicture.querySelector('.comments-loader');

// Очищение данных
const clearPictureCommentsData = () => {
  commentsList.innerHTML = '';
};

// Функция для слушателя при нажатии Esc
const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPhoto();
  }
};

// Функция для закрытия
function closeBigPhoto () {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  clearPictureCommentsData();

  // Удаляем слушатель копки закрытия
  cancelBigPicture.removeEventListener('click', closeBigPhoto);
  // Удаляем слушатель Esc
  document.removeEventListener('keydown', onPopupEscKeydown);
}


// Функция для создания списка комментариев
const createCommentItem = ({avatar, name, message}) => {
  // Копирование комментария для наполнения
  const newComment = commentTemplate.cloneNode(true);

  // Нашли картинку по классу
  const imgComments = newComment.querySelector('.social__picture');
  // Нашли абзац по классу
  const textComments = newComment.querySelector('.social__text');
  // Наполнение данными из массива
  imgComments.src = avatar;
  imgComments.alt = name;
  textComments.textContent = message;
  // Получаем комментарий
  return newComment;
};

// Функция при открытии окна
const openBigPhoto = ({ url, likes, comments, description }) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');

  // Скрываем блоки (по ТЗ)
  commentCount.classList.add('hidden');
  commentLoader.classList.add('hidden');

  // Наполнение данными
  bigPreview.src = url;
  bigLikes.textContent = likes;
  bigComments.textContent = comments.length;
  bigDescription.textContent = description;
  // Очищаем форму
  clearPictureCommentsData();
  // Создаем фрагмент
  const commentsListFragment = document.createDocumentFragment();

  // Цикл для создания списка комментариев
  for (let i = 0; i < comments.length; i++) {
    const newCommentItem = createCommentItem(comments[i]);
    commentsListFragment.append(newCommentItem);
  }

  commentsList.append(commentsListFragment);

  // Добавляем слушатели
  cancelBigPicture.addEventListener('click', closeBigPhoto);
  document.addEventListener('keydown', onPopupEscKeydown);
};


export { openBigPhoto };
