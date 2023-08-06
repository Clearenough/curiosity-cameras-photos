import { useFonts } from 'expo-font'
import { useState, useContext } from 'react'
import { View, Text, Button, Modal, Pressable, StyleSheet } from 'react-native'
import { dateTransform } from './../../helpers/dateTransform'
import CalendarSvg from '../../components/Svg/CalendarSvg'
import DateTimePicker from '@react-native-community/datetimepicker'
import { CameraAndDateContext } from '../../context/CameraAndDateContext'

function DatePicker() {
  const [fontsLoaded] = useFonts({
    'Terminal-Dosis-Regular': require('../../../assets/fonts/TerminalDosis-Regular.ttf')
  })

  const { currentDateAndCamera, setCurrentDateAndCamera } =
    useContext(CameraAndDateContext)

  const [isPickerVisible, setIsPickerVisible] = useState(false)

  const onPress = () => {
    setIsPickerVisible((isVisible) => !isVisible)
  }

  const onChange = (event, selectedDate) => {
    setCurrentDateAndCamera({ ...currentDateAndCamera, date: selectedDate })
  }

  return (
    <View style={styles.datePickerView}>
      <Pressable onPress={onPress}>
        <View style={styles.dateInput}>
          <Text
            style={{
              fontSize: 18,
              lineHeight: 22.75,
              fontFamily: 'Terminal-Dosis-Regular'
            }}
          >
            {dateTransform(currentDateAndCamera.date)}{' '}
          </Text>
          <CalendarSvg />
        </View>
      </Pressable>
      <Modal transparent={true} visible={isPickerVisible}>
        <View style={styles.modalView}>
          <DateTimePicker
            testID="dateTimePicker"
            value={currentDateAndCamera.date}
            mode={'date'}
            display={'spinner'}
            onChange={onChange}
            maximumDate={new Date()}
          />
          <Button title={'Confirm'} onPress={onPress} />
        </View>
      </Modal>
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
    paddingHorizontal: 16
  },
  modalView: {
    padding: 35,
    backgroundColor: 'white'
  }
})

export default DatePicker
