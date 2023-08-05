import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  Button,
  Modal
} from 'react-native'
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
        source={require('../../curiosity-cameras-photos/assets/selectionBg.jpg')}
        resizeMode="stretch"
      >
        <Text style={styles.text}>Select Camera and Date</Text>
        <Button title={date.toString()} onPress={onPress} />
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
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1
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
