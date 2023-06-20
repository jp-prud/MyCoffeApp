import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';

import {IconBase} from '../../components/Icon/Icon';

export function LocationFilledIcon({color = 'black', size = 24}: IconBase) {
  return (
    <Svg width={size} height={size} fill="none">
      <G clipPath="url(#a)">
        <Path
          fill={color}
          d="M20.62 8.7C19.58 4.07 15.54 2 12 2h-.01C8.46 2 4.43 4.07 3.38 8.69c-1.18 5.16 1.98 9.53 4.84 12.29A5.436 5.436 0 0 0 12 22.51c1.36 0 2.72-.51 3.77-1.53 2.86-2.76 6.02-7.12 4.85-12.28Zm-5.87 3.05h-5.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.5c.41 0 .75.34.75.75s-.34.75-.75.75Z"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
