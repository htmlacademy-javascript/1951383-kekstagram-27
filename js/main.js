
// Функция, возвращающая случайное целое число из переданного диапазона включительно
function getRandomNumber(min, max) {

  // Проверка числа на >= 0 и корректность диапазона
  if (min >= 0 && max >= 0 && min < max) {
    // округление и возвращение случайного числа
    // формула с текста "Math.random" отсюда -
    // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    return Math.round(Math.random() * (max - min) + min);
  }

  return NaN;
}

// аргументы для примера, после, думаю, там будут переменные
getRandomNumber(1, 7);

// Функция для проверки максимальной длины строки.
function isCorrectLentgh(line, length) {
  return line <= length;
}

// аргументы для примера, после, думаю, там будут переменные
isCorrectLentgh(10, 140);
