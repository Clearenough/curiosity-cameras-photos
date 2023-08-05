import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  Button,
  Modal,
  Image,
  Pressable
} from 'react-native'
import { dateTransform } from '../helpers/dateTransform'
import CalendarSvg from './../components/Svg/CalendarSvg'
import DateTimePicker from '@react-native-community/datetimepicker'
import { useState } from 'react'

function SelectionScreen() {
  const [date, setDate] = useState(new Date())
  const [isPickerVisible, setIsPickerVisible] = useState(false)
  const onPress = () => {
    setIsPickerVisible((isVisible) => !isVisible)
  }
  onConfirm = () => {
    setIsPickerVisible((isVisible) => !isVisible)
  }

  const onChange = (event, selectedDate) => {
    setDate(selectedDate)
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../../assets/selectionBg.jpg')}
        resizeMode="stretch"
      >
        <Text style={styles.text}>Select Camera and Date</Text>
        <View style={styles.datePickerView}>
          <Pressable onPress={onPress}>
            <View style={styles.dateInput}>
              <Text> {dateTransform(date)} </Text>
              <CalendarSvg />
            </View>
          </Pressable>
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
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1,
    alignItems: 'center'
  },
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
  },
  text: {
    textAlign: 'center'
  }
})

export default SelectionScreen
