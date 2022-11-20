// Создаем функцию для получения данных с двумя входными параметрами
const getData = (onSuccess, onFail) => fetch('https://27.javascript.pages.academy/kekstagram/data')
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Не удалось загрузить изображения');
  })
  .then((photos) => {
    onSuccess(photos);
  })
  .catch(() => onFail('Не удалось загрузить изображения'));

export {getData};
