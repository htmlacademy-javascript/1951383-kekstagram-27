import {getPhotos} from './util.js';
import './data.js';
import {drawSmallImages} from './draw-miniatures.js';
import './form.js';
import './scale-photo.js';
import './photo-effects.js';

drawSmallImages(getPhotos());

