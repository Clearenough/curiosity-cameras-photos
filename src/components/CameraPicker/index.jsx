import { Picker } from '@react-native-picker/picker'
import { SelectCountry } from 'react-native-element-dropdown'
import { SelectList } from 'react-native-dropdown-select-list'
import { View, Text, Button, Modal, Pressable, StyleSheet } from 'react-native'
import { useState, useContext } from 'react'
import { CameraAndDateContext } from '../../context/CameraAndDateContext'
import { CameraPickerContext } from '../../context/CameraPickerContext'
import DropdownSvg from '../Svg/DropdownSvg'
import CalendarSvg from '../Svg/CalendarSvg'

const cameras = [
  {
    label: 'Front Hazard Avoidance Camera',
    value: 'Front Hazard Avoidance Camera',
    key: 1
  },
  {
    label: 'Rear Hazard Avoidance Camera',
    value: 'Rear Hazard Avoidance Camera',
    key: 2
  },
  { label: 'Mast Camera', value: 'Mast Camera', key: 2 },
  {
    label: 'Chemistry and Camera Complex',
    value: 'Chemistry and Camera Complex',
    key: 3
  },
  { label: 'Mars Hand Lens Imager', value: 'Mars Hand Lens Imager', key: 4 },
  { label: 'Mars Descent Imager', value: 'Mars Descent Imager', key: 5 },
  { label: 'Navigation Camera', value: 'Navigation Camera', key: 6 },
  { label: 'Panoramic Camera', value: 'anoramic Camera', key: 7 },
  {
    label: 'Miniature Thermal Emission Spectrometer (Mini-TES)',
    value: 'Miniature Thermal Emission Spectrometer (Mini-TES)'
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

function CameraPicker() {
  const [isPickerVisible, setIsPickerVisible] = useState(false)
  const [isFocus, setIsFocus] = useState(false)
  const { currentDateAndCamera, setCurrentDateAndCamera } =
    useContext(CameraAndDateContext)
  console.log(cameras)
  const setValue = (value) => {
    setCurrentDateAndCamera({ ...currentDateAndCamera, camera: value })
  }
  return (
    <View style={styles.datePickerView}>
      <SelectList
        search={false}
        data={cameras}
        setSelected={(val) => setValue(accordance[val])}
        boxStyles={{
          borderColor: 'transparent',
          paddingHorizontal: 16
        }}
        dropdownStyles={{
          borderColor: 'transparent'
        }}
        arrowicon={<DropdownSvg />}
      ></SelectList>
    </View>
  )
}

const styles = StyleSheet.create({
  datePickerView: {
    backgroundColor: '#ede7df',
    justifyContent: 'center',
    borderRadius: 10,
    width: 327,
    height: 60
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
