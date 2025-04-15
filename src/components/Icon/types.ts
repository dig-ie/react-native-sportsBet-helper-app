import * as Icon from '@expo/vector-icons';
import { TouchableOpacityProps, ViewStyle } from 'react-native';

type IIconFamily = keyof typeof Icon;
type IconNames<T extends IIconFamily> = keyof (typeof Icon)[T]['glyphMap'];

interface IIconProps<T extends IIconFamily> extends TouchableOpacityProps {
  name: IconNames<T>;
  family: T;
  size?: number;
  color?: string;
  style?: ViewStyle;
  onPress?: () => void;
}
export type { IIconProps, IIconFamily, IconNames };
