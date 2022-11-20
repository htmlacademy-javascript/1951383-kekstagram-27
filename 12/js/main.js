import {drawSmallImages} from './draw-miniatures.js';
import './form.js';
import './scale-photo.js';
import './photo-effects.js';
import {getData} from './data-server-exchange.js';
import {showErrorAlert, debounce, getRandomArray, sortedByMostDiscussed} from './util.js';
import {setDefaultPhotosClick, setDiscussedPhotoClick, setRandomPhotosClick} from './filters.js';

const RENDER_DELAY = 500;
const COUNT_RANDOM_PHOTO = 10;

getData((photos) => {
  drawSmallImages(photos);

  setDefaultPhotosClick(debounce(
    () => drawSmallImages(photos),
    RENDER_DELAY,
  ));

  setRandomPhotosClick(debounce(
    () => drawSmallImages(getRandomArray(photos, COUNT_RANDOM_PHOTO)),
    RENDER_DELAY,
  ));

  setDiscussedPhotoClick(debounce(
    () => drawSmallImages(sortedByMostDiscussed(photos)),
    RENDER_DELAY,
  ));
}
,showErrorAlert
);

