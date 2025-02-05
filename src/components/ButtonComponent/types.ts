import {TouchableOpacityProps} from 'react-native';

export interface ButtonComponentProps extends TouchableOpacityProps {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  style?: object;
  textStyle?: object;
}
