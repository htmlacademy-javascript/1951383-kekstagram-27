import {drawSmallImages} from './draw-miniatures.js';
import './form.js';
import './scale-photo.js';
import './photo-effects.js';
import './upload-file.js';
import {getData} from './data-server-exchange.js';
import {showErrorAlert} from './util.js';
import {changeFilter} from './filters.js';

getData((photos) => {
  drawSmallImages(photos);
  changeFilter(photos);
}
,showErrorAlert
);

