import {StyleSheet} from 'react-native';
import {StyleConsts} from '../../StyleConsts';
import {Theme} from '../../theme/types';

export const getStyles = (theme: Theme) =>
  StyleSheet.create({
    button: {
      backgroundColor: theme.buttons.secondaryButton,
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 10,
    },
    disabledButton: {
      backgroundColor: theme.text.disableText,
    },
    label: {
      color: theme.text.primaryText,
      fontFamily: StyleConsts.fontFamily.coText,
      fontSize: StyleConsts.fontSize.titleH2Size,
      lineHeight: StyleConsts.lineHeight.lineHeight24,
    },
  });
