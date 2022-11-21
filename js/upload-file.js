const FILE_TYPES = ['jpg', 'jpeg', 'png'];

// Поле для загрузки изображения
const fileChooser = document.querySelector('#upload-file');
// Поле для предварительного просмотра фото
const preview = document.querySelector('.img-upload__preview img');

// Вешаем обработчик на выбор нового файла
fileChooser.addEventListener('change', () => {
  // Находим этот файл
  const file = fileChooser.files[0];
  // Приводим его наименование к строчным буквам и вытаскиваем его
  const fileName = file.name.toLowerCase();
  // Проверка на то, что элемент массива (it) типов файлов включает в себя окончание (endsWith) выбранного файла
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  // Если включает
  if (matches) {
    // Подставляем в ссылку для предварительного просмотра локальную ссылку на наше изображение
    // С помощью метода URL.createObjectURL() - позволяет сделать ссылку на содержимое,
    // а не ресурс на каком-то адресе.
    preview.src = URL.createObjectURL(file);
  }
});
