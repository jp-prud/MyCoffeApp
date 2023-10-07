import {Svg, Use, Rect, Defs, Pattern, Image} from 'react-native-svg';

export function MoneyBadge() {
  return (
    <Svg width="25" height="18" viewBox="0 0 25 18" fill="none">
      <Rect x="0.5" width="24" height="17.3793" fill="url(#pattern0)" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1">
          <Use
            xlinkHref="#image0_1614_2"
            transform="scale(0.0114943 0.015873)"
          />
        </Pattern>
        <Image
          id="image0_1614_2"
          width="87"
          height="63"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAAA/CAMAAACisaRpAAAAP1BMVEUAAAAAki4AkS4Aki4Aki4AlDEAmDAAkjIAkS6X2aKO1ZxlwnxHs2QPmTo1rFiS155lwXxRuG1LtWgen0UKljYVCAFMAAAACHRSTlMA8djAmkMlPXIsu/oAAAEiSURBVFjDzM4JCsMwDAVROeuXt6z3P2tpoLQYO6WWDH0HGIYu49AZaDDdMNLL1ENTP9FlNtBl5uvWQJt5HvfQ1xONaGGkAS0M1KGFjgxaMITExjU2JNJuWLjGEr50Hddx913PtfxdN3K9WO56lvCFbnAs40Kuuy0stWyZLmv4tWvXeASEI65WsWs93rzV6roTn06n092R2gXdJJuE5V2HHCft2hM5pxV2PfK8rGtRYkXdFSWrqBtREkXdAyWHqBtQEkRdlP3l76MZO7oBAASBGLr/1g6gEH9eUkcwwF27/G9yHpb5Te7bfB+i92y6v9m8eOZbOo+v/pDvO/9P9UnUf01fR3yBeEjym+dNxceK55V/UL5E+R3ko5Q/Q77P+UnlUw9gs7S5RZ2STwAAAABJRU5ErkJggg=="
        />
      </Defs>
    </Svg>
  );
}
