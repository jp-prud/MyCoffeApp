import {Svg, Use, Path, Defs, Pattern, Image} from 'react-native-svg';

export function AmexBadge() {
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
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAAA/CAMAAACisaRpAAAApVBMVEUAAAAAf84Afs4Afs0Afs4AgM0Agc4Ag88AgtEAfs3///9brN+42/HC4PMHgs73+/0tlNYkkNSgzuyTyOkQhtDp9Pr7/P4Lg8/s9fvc7fiPxun+/v70+fyv1u95u+RGodtBn9o2mdcZi9Lw9/zi8Pmz2PCn0u2k0O2ay+tQpt08nNnX6vfN5vXI4/SVyepos+FLo9uHwud/vuZwtuNgr+DS6Pa+3vLuyAz3AAAACXRSTlMA8+7YwJpDJT1W3Y10AAACLklEQVRYw+zOyQ0AIAwDQecE998wIhIdJD+mgNWiZJiwg1gknuXs5AtlK3vprltlN73Hzn4OJCckghMCxgkG4QQBZ/zu7x7252CJQCgMw/D6exGiqEgyVExhxrj/S9NBadEce+Pd/Yv/mfn+7t/9XfcCJHo1AIhVlwKMpCGfwgK4ylRBtLW7LlB13aHqij7XXONU0tQHV3Z3CXhdd6e6sNc13kHSGlap3d1gSjouE0nlx80W7xwpfO4/ArHsbo4pb90AzpLjEzRud/Dcg1IlBM4X14MReK2bRWTSEdw+VzfgABSyuwlE0zEkjTs7EUgxnHtdlZju+uJW5nsNeeu6kGqPv23cB3t119sgCIZh+Pi9m6g0zjFrtR9qOzVr14/9/5+2EARPmJ4vfQ4lXgQeAllsY9e03wBZsuTWcDec9u4FVqIZEuea+HNiv6xlwe0AJWkMlXMTyBV8/eGqGNPagpvDICINnJ0rBcMDVt5t0zFissXktuDWUFpPe/eHrAWVBHurgBhiNevugatSypRROfcbMrQE3aiHY5dBM+caongzKeDs3E+AJuyWmJ5z4DrnfozjxtLR6B4Aysk9RS5yOEIvkmpXXdhNoLDDUQHV6JrZ2Hl3Si0n7H5dXHVh9wZbEVfz2rktbN5Dbof74emqC7o9PKYbUkeje4enhNzBazug+V/v28t9ub/jHDWXkzaAVv15Wo0/0Gq8hFbjOzQaj6LV+BmNxvtoNz5Jq/FUACHA1L0E704eAAAAAElFTkSuQmCC"
          id="b"
          width="87"
          height="63"
        />
      </Defs>
    </Svg>
  );
}
