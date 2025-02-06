import { StyleSheet } from 'react-native';
import { StyleConsts } from '../../../../StyleConsts';
import { Theme } from '../../../../theme/types';

export const getStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.primaryBackground.primaryBG,
      padding: StyleConsts.spacing.normal,
    },
    phrase: {
      padding: StyleConsts.spacing.normal,
      marginVertical: StyleConsts.spacing.xsmall,
      borderRadius: StyleConsts.spacing.xsmall,
      fontSize: StyleConsts.fontSize.titleH1Size,
      fontFamily: StyleConsts.fontFamily.coText,
      color: theme.text.primaryText,
    },
    highlighted: {
      backgroundColor: theme.primaryBackground.lightGrey,
      color: theme.text.primaryText,
    },
    controls: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      padding: StyleConsts.spacing.normal,
      borderTopWidth: 1,
      borderColor: theme.borderOutlines.borderOutlines,
    },
    controlButton: {
      padding: StyleConsts.spacing.normal,
      borderRadius: StyleConsts.spacing.normal,
      backgroundColor: theme.buttons.primaryButton,
    },
    controlText: {
      fontSize: StyleConsts.fontSize.titleH2Size,
      color: theme.text.primaryText,
    },
  });
