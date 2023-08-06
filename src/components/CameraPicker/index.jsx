import { useFonts } from 'expo-font'
import { SelectList } from 'react-native-dropdown-select-list'
import { View, Text, Button, Modal, Pressable, StyleSheet } from 'react-native'
import { useState, useContext, useEffect } from 'react'
import { CameraAndDateContext } from '../../context/CameraAndDateContext'
import { CameraPickerContext } from '../../context/CameraPickerContext'
import DropdownSvg from '../Svg/DropdownSvg'
import CalendarSvg from '../Svg/CalendarSvg'

const cameras = [
  {
    label: 'Front Hazard Avoidance Camera',
    value: 'Front Hazard Avoidance Camera',
    key: 'Front Hazard Avoidance Camera'
  },
  {
    label: 'Rear Hazard Avoidance Camera',
    value: 'Rear Hazard Avoidance Camera',
    key: 'Rear Hazard Avoidance Camera'
  },
  { label: 'Mast Camera', value: 'Mast Camera', key: 'Mast Camera' },
  {
    label: 'Chemistry and Camera Complex',
    value: 'Chemistry and Camera Complex',
    key: 'Chemistry and Camera Complex'
  },
  {
    label: 'Mars Hand Lens Imager',
    value: 'Mars Hand Lens Imager',
    key: 'Mars Hand Lens Imager'
  },
  {
    label: 'Mars Descent Imager',
    value: 'Mars Descent Imager',
    key: 'Mars Descent Imager'
  },
  {
    label: 'Navigation Camera',
    value: 'Navigation Camera',
    key: 'Navigation Camera'
  },
  {
    label: 'Panoramic Camera',
    value: 'Panoramic Camera',
    key: 'Panoramic Camera'
  },
  {
    label: 'Miniature Thermal Emission Spectrometer (Mini-TES)',
    value: '(Mini-TES)',
    key: 'Miniature Thermal Emission Spectrometer (Mini-TES)'
  }
]

const accordance = {
  'Front Hazard Avoidance Camera': 'fhaz',
  'Rear Hazard Avoidance Camera': 'rhaz',
  'Mast Camera': 'mast',
  'Chemistry and Camera Complex': 'chemcam',
  'Mars Hand Lens Imager': 'mahli',
  'Mars Descent Imager': 'mardi',
  'Navigation Camera': 'navcam',
  'Panoramic Camera': 'pancam',
  'Miniature Thermal Emission Spectrometer (Mini-TES)': 'minites'
}

const data2 = [
  { key: 'Canada', value: 'Canada' },
  { key: 'England', value: 'England' },
  { key: 'Pakistan', value: 'Pakistan' },
  { key: 'India', value: 'India' },
  { key: 'NewZealand', value: 'NewZealand' }
]

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
        setSelected={(val) => setValue(accordance[val])}
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
