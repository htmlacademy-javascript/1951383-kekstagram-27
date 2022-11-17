import {EFFECTS} from './effect-parameters.js';

// Форма редактирования загружаемого изображения
const imgUploadSection = document.querySelector('.img-upload__overlay');
// Форма загрузки изображения
const form = document.querySelector('.img-upload__form');
// Элемент для подключения слайдера
const slider = imgUploadSection.querySelector('.effect-level__slider');
// Ссылка на редактируемое изображение
const photoPreview = form.querySelector('.img-upload__preview img');
// Элемент для сохранения значений наложенного эффекта
const effectLevelElement = form.querySelector('.effect-level__value');
// Изменение глубины эффекта, накладываемого на изображение
const blockSliderEffect = form.querySelector('.img-upload__effect-level');

// Начальное состояние изображения - первый элемент
const DEFAULT_EFFECT = EFFECTS[0];
// Выбранный эффект, изначально - без эффектов
let chosenEffect = DEFAULT_EFFECT;
// Проверка на начальное состояние для отключения слайдера
const isDefault = () => chosenEffect === DEFAULT_EFFECT;

// Функция измениния  параметров эффекта
const updateSlider = () => {
  // Показываем поле
  blockSliderEffect.classList.remove('hidden');
  // Обновляем данные под выбранный эффект
  slider.noUiSlider.updateOptions({
    range: {
      min: chosenEffect.min,
      max: chosenEffect.max,
    },
    step: chosenEffect.step,
    start: chosenEffect.max,
  });
  // Если состояние начальное - скрываем
  if (isDefault()) {
    blockSliderEffect.classList.add('hidden');
  }
};

// Обработчик событий для переключения эффектов
const onFormChange = (evt) => {
  // Если выбранный объект НЕрадиокнопка (не содержит нужный класс)
  if (!evt.target.classList.contains('effects__radio')) {
    // Заканчиваем выполнение функции
    return;
  }
  // Выбранный эффект ищется путем поиска в массиве эффектов с ключом name,
  // соответсвующим значению выбранного элемента
  chosenEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  // Затем запускаем изменения по параметрам выбранного элемента
  updateSlider();
};

// Передача значений для редактирования стилей
const onSliderUpdate = () => {
  // Обнуляем все значения
  photoPreview.style.filter = 'none';
  photoPreview.className = '';
  effectLevelElement.value = '';
  // Если выбранный элемент без эффектов - заканчиваем выполнение функции
  if (isDefault()) {
    return;
  }
  // Записываем в переменную значение, которое вернул нам слайдер
  const sliderValue = slider.noUiSlider.get();
  // Меняем CSS-стили картинки
  // unit - единица измерения для корректного отображения CSS стиля
  photoPreview.style.filter = `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`;
  // Добавляем фотографии класс выбранного эффекта
  photoPreview.classList.add(`effects__preview--${chosenEffect.name}`);
  // Записываем в скрытую форму
  effectLevelElement.value = sliderValue;
};

// Сброс значений
const resetEffects = () => {
  chosenEffect = DEFAULT_EFFECT;
  updateSlider();
};

// Создание слайдера
window.noUiSlider.create(slider, {
  range: {
    // Ссылка на DEFAULT_EFFECT, который меняется на нужный эффект при выборе последнего
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  // Значение на старте - 100% по ТЗ
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower'
});

updateSlider();

// Обработчики событий
form.addEventListener('change', onFormChange);
slider.noUiSlider.on('update', onSliderUpdate);

export {resetEffects};
