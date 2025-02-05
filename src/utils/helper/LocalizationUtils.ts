import {I18nManager} from 'react-native';

const isRTL: boolean = I18nManager.isRTL;

const allowRTL: (allowRTL: boolean) => void = I18nManager.allowRTL;

const forceRTL: (forceRTL: boolean) => void = I18nManager.forceRTL;

export {allowRTL, forceRTL, isRTL};
