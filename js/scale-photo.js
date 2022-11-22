// Требования к масштабированию
const PARAMETRS_SCALE = {
  minSize: 25,
  maxSize: 100,
  step: 25,
  start: 100,
};

// Элемент формы, отвечающий за размер изображения
const scaleField = document.querySelector('.img-upload__scale');
// Кнопка увеличения масштаба
const biggerButton = scaleField.querySelector('.scale__control--bigger');
// Кнопка уменьшения масштаба
const smallerButton = scaleField.querySelector('.scale__control--smaller');
// Значение поля
const scaleValue = document.querySelector('.scale__control--value');
// Ссылка на редактируемое изображение
const photoPreview = document.querySelector('.img-upload__preview img');

// Функция для сброса масштабирования
const resetScale = () => {
  scaleValue.value = `${PARAMETRS_SCALE.start}%`;
  photoPreview.style.transform = `scale(${scaleValue.value})`;
};

// Увеличение масштаба
const increaseScale = () => {
  // Возвращаем значение поля - целое число в десятичной системе исчисления и записываем в переменную
  let parseIntValue = parseInt(scaleValue.value, 10);
  // Если значение поля меньше максимального
  if (parseIntValue < PARAMETRS_SCALE.maxSize) {
    // В стиль изображение подтягивается новое значение: текущее значение поля плюс величина шага
    photoPreview.style.transform = `scale(${parseIntValue += PARAMETRS_SCALE.step}%)`;
    // Значение поля обновляется
    scaleValue.value = `${parseIntValue}%`;
  }
};

// Уменьшение масштаба
const decreaseScale = () => {
// Возвращаем значение поля - целое число в десятичной системе исчисления и записываем в переменную
  let parseIntValue = parseInt(scaleValue.value, 10);
  // Если значение поля больше мминимального
  if( parseIntValue > PARAMETRS_SCALE.minSize) {
    // В стиль изображение подтягивается новое значение: текущее значение поля минус величина шага
    photoPreview.style.transform = `scale(${parseIntValue -= PARAMETRS_SCALE.step}%)`;
    // Значение поля обновляется
    scaleValue.value = `${parseIntValue}%`;
  }
};

// Обработчик клика на кнопки на элементе
scaleField.addEventListener('click', (evt) => {
  if (evt.target === biggerButton) {
    increaseScale();
  }
  if (evt.target === smallerButton) {
    decreaseScale();
  }
});

export {resetScale};
