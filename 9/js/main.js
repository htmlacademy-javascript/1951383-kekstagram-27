import {getPhotos} from './util.js';
import './data.js';
import {drawSmallImages} from './draw-miniatures.js';
import './form.js';

drawSmallImages(getPhotos());

