import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
const BackSvg = ({ color }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m14.5 6.5-4.293 4.293a1 1 0 0 0 0 1.414L14.5 16.5"
    />
  </Svg>
)
export default BackSvg
