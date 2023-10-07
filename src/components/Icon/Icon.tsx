import {Pressable} from 'react-native';

import {useAppTheme} from '@hooks';
import {ThemeColors} from '@theme';

import {AddIcon} from '../../assets/icons/AddIcon';
import {ArrowIcon} from '../../assets/icons/ArrowIcon';
import {BagFillIcon} from '../../assets/icons/BagFillIcon';
import {BagIcon} from '../../assets/icons/BagIcon';
import {BookmarkFillIcon} from '../../assets/icons/BookmarkFillIcon';
import {BookmarkIcon} from '../../assets/icons/BookmarkIcon';
import {CalendarIcon} from '../../assets/icons/CalendarIcon';
import {CallIcon} from '../../assets/icons/CallIcon';
import {CardIcon} from '../../assets/icons/CardIcon';
import {CheckRoundIcon} from '../../assets/icons/CheckRoundIcon';
import {ChevronIcon} from '../../assets/icons/ChevronIcon';
import {ClockIcon} from '../../assets/icons/ClockIcon';
import {EyeOffIcon} from '../../assets/icons/EyeOffIcon';
import {EyeOnIcon} from '../../assets/icons/EyeOnIcon';
import {HeartIcon} from '../../assets/icons/HeartIcon';
import {HomeFillIcon} from '../../assets/icons/HomeFillIcon';
import {HomeIcon} from '../../assets/icons/HomeIcon';
import {LocationFilledIcon} from '../../assets/icons/LocationFilledIcon';
import {LocationIcon} from '../../assets/icons/LocationIcon';
import {MessageRoundIcon} from '../../assets/icons/MessageRoundIcon';
import {MessageTextIcon} from '../../assets/icons/MessageTextIcon';
import {MinusIcon} from '../../assets/icons/MinusIcon';
import {NotificationIcon} from '../../assets/icons/NotificationIcon';
import {SearchIcon} from '../../assets/icons/SearchIcon';
import {SendFillIcon} from '../../assets/icons/SendFillIcon';
import {SendIcon} from '../../assets/icons/SendIcon';
import {TagIcon} from '../../assets/icons/Tagicon';
import {TicketIcon} from '../../assets/icons/TicketIcon';
import {TransactionFillIcon} from '../../assets/icons/TransactionFillIcon';
import {TransactionIcon} from '../../assets/icons/TransactionIcon';
import {TrashIcon} from '../../assets/icons/TrashIcon';
import {UserFillIcon} from '../../assets/icons/UserFillIcon';
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
  add: AddIcon,
  arrow: ArrowIcon,
  bag: BagIcon,
  bagFill: BagFillIcon,
  bookmark: BookmarkIcon,
  bookmarkFill: BookmarkFillIcon,
  checkRound: CheckRoundIcon,
  chevron: ChevronIcon,
  call: CallIcon,
  calendar: CalendarIcon,
  clock: ClockIcon,
  card: CardIcon,
  eyeOff: EyeOffIcon,
  eyeOn: EyeOnIcon,
  heart: HeartIcon,
  home: HomeIcon,
  homeFill: HomeFillIcon,
  location: LocationIcon,
  locationFilled: LocationFilledIcon,
  messageRound: MessageRoundIcon,
  messageText: MessageTextIcon,
  minus: MinusIcon,
  notification: NotificationIcon,
  search: SearchIcon,
  user: UserIcon,
  userFilled: UserFillIcon,
  send: SendIcon,
  sendFill: SendFillIcon,
  tag: TagIcon,
  ticket: TicketIcon,
  trash: TrashIcon,
  transaction: TransactionIcon,
  transactionFill: TransactionFillIcon,
};

type IconType = typeof iconRegistry;

export type IconName = keyof IconType;
