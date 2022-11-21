// Время закрытия модального окна
const ALERT_SHOW_TIME = 5000;

// Проверка на клавишу ESC
const isEscapeKey = (evt) => evt.key === 'Escape';

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

// Функция для перемешивания массива
// Взята отсюда - https://stackoverflow.com/questions/39680997/shuffle-javascript-array
// Скорректирована
const shuffle = (array) => {
  let currentIndex = array.length, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
};

// Функция для сортировки по кол-ву комментариев
const sortByComments = (a, b) => b.comments.length - a.comments.length;

export {isEscapeKey, showErrorAlert, debounce, shuffle, sortByComments};
