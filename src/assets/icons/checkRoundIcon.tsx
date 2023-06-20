import Svg, {Circle, Path} from 'react-native-svg';

import {IconBase} from '../../components/Icon/Icon';
import {palette} from '../../theme/theme';

export function CheckRoundIcon({
  color = palette.greenPrimary,
}: Pick<IconBase, 'color'>) {
  return (
    <Svg width="48" height="48" fill="none">
      <Circle cx="24" cy="24" r="24" fill={color} />
      <Path
        fill="#fff"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.648 17.352a1.2 1.2 0 0 1 0 1.697l-11.2 11.2a1.2 1.2 0 0 1-1.697 0l-6.4-6.4a1.2 1.2 0 1 1 1.697-1.698l5.552 5.552 10.352-10.351a1.2 1.2 0 0 1 1.696 0Z"
      />
    </Svg>
  );
}
