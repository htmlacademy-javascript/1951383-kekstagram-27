import {getPhotos} from './util.js';
import './data.js';
import {drawImages} from './draw-miniatures.js';

drawImages(getPhotos());
