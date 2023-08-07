import { useFonts } from 'expo-font'
import { SelectList } from 'react-native-dropdown-select-list'
import { View, Text, Button, Modal, Pressable, StyleSheet } from 'react-native'
import { useState, useContext, useEffect } from 'react'
import { CameraAndDateContext } from '../../context/CameraAndDateContext'
import { CameraPickerContext } from '../../context/CameraPickerContext'
import DropdownSvg from '../Svg/DropdownSvg'
import CalendarSvg from '../Svg/CalendarSvg'

import { accordance, cameras } from '../../constants/constants'

function CameraPicker() {
  const [fontsLoaded] = useFonts({
    'Terminal-Dosis-Regular': require('../../../assets/fonts/TerminalDosis-Regular.ttf')
  })
  const [isFontLoaded, setIsFontLoaded] = useState(false)
  const [isFocus, setIsFocus] = useState(false)
  const [selected, setSelected] = useState('')
  const { currentDateAndCamera, setCurrentDateAndCamera } =
    useContext(CameraAndDateContext)
  const setValue = (value) => {
    setCurrentDateAndCamera({ ...currentDateAndCamera, camera: value })
  }

  if (!fontsLoaded) {
    return null
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
