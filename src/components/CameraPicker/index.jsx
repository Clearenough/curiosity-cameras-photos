import { useFonts } from 'expo-font'
import { SelectList } from 'react-native-dropdown-select-list'
import { View, StyleSheet } from 'react-native'
import { useContext } from 'react'
import { CameraAndDateContext } from '../../context/CameraAndDateContext'
import DropdownSvg from '../Svg/DropdownSvg'

import { cameras } from '../../constants/constants'

function CameraPicker({ setCamera }) {
  const [fontsLoaded] = useFonts({
    'Terminal-Dosis-Regular': require('../../../assets/fonts/TerminalDosis-Regular.ttf')
  })
  useContext(CameraAndDateContext)
  const setValue = (value) => {
    setCamera(value)
  }

  return (
    <View style={styles.datePickerView}>
      <SelectList
        search={false}
        data={cameras}
        setSelected={(val) => setValue(val)}
        fontFamily={'Terminal-Dosis-Regular'}
        inputStyles={{
          fontSize: 18,
          lineHeight: 22.75
        }}
        boxStyles={{
          borderColor: 'transparent',
          paddingHorizontal: 16,
          paddingVertical: 18,
          width: 327
        }}
        dropdownStyles={{
          borderColor: 'transparent'
        }}
        dropdownTextStyles={{
          fontSize: 18,
          lineHeight: 22.75,
          paddingTop: 0
        }}
        arrowicon={<DropdownSvg />}
        maxHeight={100}
      ></SelectList>
    </View>
  )
}

const styles = StyleSheet.create({
  datePickerView: {
    backgroundColor: '#ede7df',
    justifyContent: 'center',
    borderRadius: 10
    // width: 327,
    // height: 60
  },
  dateInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 12,
    paddingRight: 16
  },
  modalView: {
    padding: 35,
    backgroundColor: 'white'
  }
})

export default CameraPicker
