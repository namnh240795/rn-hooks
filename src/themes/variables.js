import { Platform, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const DEVICE_WIDTH = width;
export const DEVICE_HEIGHT = height;

export const ASPECT_RATIO = DEVICE_WIDTH / DEVICE_HEIGHT;

export const COLOR = {};
