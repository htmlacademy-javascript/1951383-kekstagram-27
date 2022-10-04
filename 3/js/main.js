
//Функция, возвращающая случайное целое число из переданного диапазона включительно
function returnsRandomNumberFromInterval(min, max) {

  //Проверка числа на >= 0 и корректность диапазона
  if (min >= 0 && max >= 0 && min < max) {
    /*округление и возвращение случайного числа
      формула с текста "Math.random" отсюда -
      https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
      */
    return Math.round(Math.random() * (max - min) + min);

    // во всех остальных случаях ничего я не придумала, пусть пока возвращает NaN
  }
  return NaN;
}

returnsRandomNumberFromInterval(1, 7); //аргументы для примера, после, думаю, там будут переменные


//Функция для проверки максимальной длины строки.
function checkStringLength(line, length) {
  return line <= length;
}

checkStringLength(10, 140); //аргументы для примера, после, думаю, там будут переменные

