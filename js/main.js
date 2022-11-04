import {getPhotos} from './util.js';
import './data.js';
import {drawSmallImages} from './draw-miniatures.js';

drawSmallImages(getPhotos());
