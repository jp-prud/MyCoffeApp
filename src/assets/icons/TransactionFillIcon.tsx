import {Svg, Path} from 'react-native-svg';

import {IconBase} from '../../components/Icon/Icon';

export function TransactionFillIcon({color = 'black', size = 24}: IconBase) {
  return (
    <Svg width={size + 1} height={size} fill="none">
      <Path
        fill={color}
        d="M15.79 2H8.23C4.45 2 3.51 3.01 3.51 7.04V18.3c0 2.66 1.46 3.29 3.23 1.39l.01-.01c.82-.87 2.07-.8 2.78.15l1.01 1.35c.81 1.07 2.12 1.07 2.93 0l1.01-1.35c.72-.96 1.97-1.03 2.79-.15 1.78 1.9 3.23 1.27 3.23-1.39V7.04C20.51 3.01 19.57 2 15.79 2Zm-1.03 8.75h-5.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.5c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      />
    </Svg>
  );
}
