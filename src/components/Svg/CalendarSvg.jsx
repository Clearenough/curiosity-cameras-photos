import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
const CalendarSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#130F26"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.093 9.404h17.824M16.442 13.31h.01M12.005 13.31h.009M7.558 13.31h.01M16.442 17.196h.01M12.005 17.196h.009M7.558 17.196h.01M16.044 2v3.29M7.966 2v3.29"
    />
    <Path
      stroke="#130F26"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.238 3.58H7.771C4.834 3.58 3 5.214 3 8.221v9.05C3 20.326 4.834 22 7.771 22h8.458C19.175 22 21 20.355 21 17.348V8.222c.01-3.007-1.816-4.643-4.762-4.643Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default CalendarSvg
