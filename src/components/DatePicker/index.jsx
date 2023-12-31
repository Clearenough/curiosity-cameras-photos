import { useFonts } from 'expo-font'
import { useState } from 'react'
import {
  View,
  Text,
  Button,
  Modal,
  Pressable,
  StyleSheet,
  Platform
} from 'react-native'
import { dateTransform } from './../../helpers/dateTransform'
import CalendarSvg from '../../components/Svg/CalendarSvg'
import DateTimePicker from '@react-native-community/datetimepicker'

function DatePicker({ date, setDate }) {
  const [fontsLoaded] = useFonts({
    'Terminal-Dosis-Regular': require('../../../assets/fonts/TerminalDosis-Regular.ttf')
  })

  const [isPickerVisible, setIsPickerVisible] = useState(false)

  const onPress = () => {
    setIsPickerVisible((isVisible) => !isVisible)
  }

  const onChange = ({ type }, selectedDate) => {
    if (type === 'set') {
      setDate(selectedDate)

      if (Platform.OS === 'android') {
        setIsPickerVisible(!isPickerVisible)
      }
    } else {
      setIsPickerVisible(!isPickerVisible)
    }
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
            {dateTransform(date)}
          </Text>
          <CalendarSvg />
        </View>
      </Pressable>
      {Platform.OS === 'android' && isPickerVisible && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={'date'}
          display={'spinner'}
          onChange={onChange}
          maximumDate={new Date()}
        />
      )}
      {Platform.OS === 'ios' && (
        <Modal transparent={true} visible={isPickerVisible}>
          <View style={styles.modalView}>
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={'date'}
              display={'spinner'}
              onChange={onChange}
              maximumDate={new Date()}
            />
            <Button title={'Confirm'} onPress={onPress} />
          </View>
        </Modal>
      )}
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 35,
    backgroundColor: '#ede7df'
  }
})

export default DatePicker
