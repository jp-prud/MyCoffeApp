import {Svg, Path} from 'react-native-svg';

import {IconBase} from '../../components/Icon/Icon';

export function BagIcon({color = 'black', size = 24}: IconBase) {
  return (
    <Svg width={size} height={size} fill="none">
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M8.81 2 5.19 5.63M15.19 2l3.62 3.63"
      />
      <Path
        stroke={color}
        strokeWidth="1.5"
        d="M2 7.85c0-1.85.99-2 2.22-2h15.56c1.23 0 2.22.15 2.22 2 0 2.15-.99 2-2.22 2H4.22C2.99 9.85 2 10 2 7.85Z"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M9.76 14v3.55M14.36 14v3.55M3.5 10l1.41 8.64C5.23 20.58 6 22 8.86 22h6.03c3.11 0 3.57-1.36 3.93-3.24L20.5 10"
      />
    </Svg>
  );
}
