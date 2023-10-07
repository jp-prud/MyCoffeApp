import {Svg, Use, Defs, Pattern, Image} from 'react-native-svg';

export function VisaBadge() {
  return (
    <Svg width="25" height="18" fill="none">
      <path fill="url(#a)" d="M.5 0h24v17.379H.5z" />
      <Defs>
        <Pattern
          id="a"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox">
          <Use xlinkHref="#b" transform="scale(.0115 .01587)" />
        </Pattern>
        <Image
          xlinkHref="data:image/png;base64,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"
          id="b"
          width="87"
          height="63"
        />
      </Defs>
    </Svg>
  );
}
