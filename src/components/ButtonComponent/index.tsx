import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import {ButtonComponentProps} from './types';
import {getStyles} from './styles';
import {useTheme} from '../../theme';

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  label,
  onPress,
  disabled = false,
  loading = false,
  style,
  textStyle,
  ...rest
}) => {
  const {theme} = useTheme();
  const styles = getStyles(theme);

  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabledButton, style]}
      onPress={onPress}
      disabled={disabled || loading}
      {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color={theme.buttons.darkBlue} />
      ) : (
        <Text style={[styles.label, textStyle]}>{label}</Text>
      )}
    </TouchableOpacity>
  );
};

export {ButtonComponent};
