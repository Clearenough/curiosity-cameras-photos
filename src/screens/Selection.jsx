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
import DatePicker from '../components/DatePicker'
import CameraPicker from '../components/CameraPicker'

function SelectionScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../../assets/selectionBg.jpg')}
        resizeMode="stretch"
      >
        <Text style={styles.text}>Select Camera and Date</Text>
        <DatePicker />
        <CameraPicker />
        <View style={styles.cameraPicker}></View>
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
  text: {
    textAlign: 'center'
  }
})

export default SelectionScreen
