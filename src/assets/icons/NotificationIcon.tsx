import Svg, {Path} from 'react-native-svg';

import {IconBase} from '../../components/Icon/Icon';

export function NotificationIcon({size = 24, color = 'black'}: IconBase) {
  return (
    <Svg width={size} height={size} fill="none">
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M11.802 1.71c-3.31 0-6 2.69-6 6v2.89c0 .61-.26 1.54-.57 2.06l-1.15 1.91c-.71 1.18-.22 2.49 1.08 2.93 4.31 1.44 8.96 1.44 13.27 0 1.21-.4 1.74-1.83 1.08-2.93l-1.15-1.91c-.3-.52-.56-1.45-.56-2.06V7.71c0-3.3-2.7-6-6-6Z"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M13.87 3.2a6.754 6.754 0 0 0-3.7 0c.29-.74 1.01-1.26 1.85-1.26.84 0 1.56.52 1.85 1.26Z"
      />
      <Path
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M15.02 19.06c0 1.65-1.35 3-3 3-.82 0-1.58-.34-2.12-.88a3.01 3.01 0 0 1-.88-2.12"
      />
    </Svg>
  );
}
