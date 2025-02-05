import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useTheme} from '../../theme';
import Icon from '@react-native-vector-icons/ionicons';
import {HeaderComponentProps} from './types';
import {getStyles} from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const HeaderComponent: React.FC<HeaderComponentProps> = ({
  title,
  onBackPress,
  style,
  onLogout,
}) => {
  const {theme} = useTheme();
  const {top, bottom} = useSafeAreaInsets();
  const styles = getStyles(theme);

  return (
    <View style={[styles.container, {paddingTop: top}, style]}>
      <TouchableOpacity onPress={onBackPress} style={styles.iconContainer}>
        {onBackPress && (
          <Icon name="arrow-back" size={24} color={theme.text.primaryText} />
        )}
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>
      <View style={styles.placeholder}>
        {onLogout && (
          <TouchableOpacity onPress={onLogout} style={styles.logoutContainer}>
            <Icon
              name="log-out-outline"
              size={24}
              color={theme.text.primaryText}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export {HeaderComponent};
