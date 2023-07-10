import {Pressable} from 'react-native';

import {useAppTheme} from '@hooks';
import {ThemeColors} from '@theme';

import {ArrowIcon} from '../../assets/icons/ArrowIcon';
import {BagFillIcon} from '../../assets/icons/BagFillIcon';
import {BagIcon} from '../../assets/icons/BagIcon';
import {BookmarkFillIcon} from '../../assets/icons/BookmarkFillIcon';
import {BookmarkIcon} from '../../assets/icons/BookmarkIcon';
import {CheckRoundIcon} from '../../assets/icons/checkRoundIcon';
import {ChevronIcon} from '../../assets/icons/ChevronIcon';
import {EyeOffIcon} from '../../assets/icons/EyeOffIcon';
import {EyeOnIcon} from '../../assets/icons/EyeOnIcon';
import {HeartIcon} from '../../assets/icons/HeartIcon';
import {HomeFillIcon} from '../../assets/icons/HomeFillIcon';
import {HomeIcon} from '../../assets/icons/HomeIcon';
import {LocationFilledIcon} from '../../assets/icons/LocationFilledIcon';
import {LocationIcon} from '../../assets/icons/LocationIcon';
import {MessageRoundIcon} from '../../assets/icons/MessageRoundIcon';
import {NotificationIcon} from '../../assets/icons/NotificationIcon';
import {SearchIcon} from '../../assets/icons/SearchIcon';
import {UserFilledIcon} from '../../assets/icons/UserFilledIcon';
import {UserIcon} from '../../assets/icons/UserIcon';

export interface IconBase {
  size?: number;
  color?: string;
}

export interface IconProps {
  name: IconName;
  color?: ThemeColors;
  size?: number;
  onPress?(): void;
}

export function Icon({
  name,
  color = 'backgroundContrast',
  size,
  onPress,
}: IconProps) {
  const {colors} = useAppTheme();
  const SVGIcon = iconRegistry[name];

  const Icon = <SVGIcon color={colors[color]} size={size} />;

  if (onPress) {
    return (
      <Pressable hitSlop={10} onPress={onPress}>
        {Icon}
      </Pressable>
    );
  }

  return Icon;
}

const iconRegistry = {
  arrow: ArrowIcon,
  bag: BagIcon,
  bagFill: BagFillIcon,
  bookmark: BookmarkIcon,
  bookmarkFill: BookmarkFillIcon,
  chevron: ChevronIcon,
  eyeOff: EyeOffIcon,
  eyeOn: EyeOnIcon,
  heart: HeartIcon,
  home: HomeIcon,
  homeFill: HomeFillIcon,
  location: LocationIcon,
  locationFilled: LocationFilledIcon,
  notification: NotificationIcon,
  search: SearchIcon,
  user: UserIcon,
  userFilled: UserFilledIcon,
  checkRound: CheckRoundIcon,
  messageRound: MessageRoundIcon,
};

type IconType = typeof iconRegistry;

export type IconName = keyof IconType;
