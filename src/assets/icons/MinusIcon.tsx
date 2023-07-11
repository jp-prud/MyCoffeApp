import {Svg, Path} from 'react-native-svg';

import {IconBase} from '../../components/Icon/Icon';

export function MinusIcon({color = 'black', size = 24}: IconBase) {
  return (
    <Svg width={size} height={size} fill="none">
      <Path
        fill={color}
        d="M18 12.75H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      />
    </Svg>
  );
}
