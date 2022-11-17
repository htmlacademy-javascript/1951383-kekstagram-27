import {getPhotos} from './util.js';
import './data.js';
import {drawSmallImages} from './draw-miniatures.js';
import './form.js';
import './scale-photo.js';
import './photo-effects.js';
import {getData} from './data-server-exchange.js';
import {showErrorAlert} from './util.js';

getData((photos) => {
  drawSmallImages(photos);
},
() => {
  showErrorAlert('Не удалось загрузить изображения.');
}
);

// drawSmallImages(getPhotos());

