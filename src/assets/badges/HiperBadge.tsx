import {Svg, Use, Path, Defs, Pattern, Image} from 'react-native-svg';

export function HiperBadge() {
  return (
    <Svg width="25" height="18" fill="none">
      <Path fill="url(#a)" d="M.5 0h24v17.379H.5z" />
      <Defs>
        <Pattern
          id="a"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox">
          <Use xlinkHref="#b" transform="scale(.0115 .01587)" />
        </Pattern>
        <Image
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAAA/CAMAAACisaRpAAAArlBMVEUAAADLABjLABnLABnLABnKABnOABvPABzNABnKABj+/v7okJrlhI/cV2bYQ1TNDSP9+vr66evyxMnxvcPjeYXdXGvWO03SKDzRJDjQGzDKAxr21dj1z9PurrXrnqfpmKHgbXrganjeYnDVNUfULkH88vP77/Dzys7sp6/kfYridIHfZnTbUWHaTFzYSFnQHzTOFSv89PX55Ob44uT3297zxsvwuL7roanlhZDlgo2WB3VsAAAACXRSTlMA8+7YwJpDJT1W3Y10AAABdklEQVRYw+3YyXKCQBSFYRBQGwScEHCe5ylz8v4vlhNTqbZ1e26VleLu/s2HpS3otS5T9hxbMcZ2vLL1NxVXMcet/LLVkuJOqXp5tWDZcAWuq/jj4iNTElO2PCUxnuUoiXEsW0mMbSmZKdzC/f/uwPf9qc5PZMBwe4Bm5mUmBLdbBxSblzkS3BTO681lMoK7hzPQmSHrXYLbBvSl84DsKYL7ASjUuUWuGe4KUKpziGwz3IX5fr7BPRDcHE7/qpfoE8GN4DSjzmyenbI0nf/kQhHcsX83TYY7undHDLcFKJhMkyQMw2TS7iPHDLcB6KzzHRkR3DOcxlU/o3OCG8Fp6YyRT4rgjs27eAfZZ7gj82GxQ64ZbtN8WATIDcNdAorNUxcS3PzmODTQc4J7NL+2sY+JCe4WztA8Di+K4N7cxXfIFsNdAdqbxyFguJtarZbrTJCdR/99VriF+6Cu0P95qf2D1L5Ear8jtI+S2p8J7fvk9pNS+9RvYzPIZj539CsAAAAASUVORK5CYII="
          id="b"
          width="87"
          height="63"
        />
      </Defs>
    </Svg>
  );
}
