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
import { useContext } from 'react'
import { useFonts } from 'expo-font'
import DatePicker from '../components/DatePicker'
import CameraPicker from '../components/CameraPicker'
import { CameraAndDateContext } from '../context/CameraAndDateContext'
import { getPhotos } from '../api/api'
import { dateTransform } from '../helpers/dateTransform'

function SelectionScreen({ navigation }) {
  const { currentDateAndCamera, photos, setPhotos } =
    useContext(CameraAndDateContext)

  const [fontsLoaded] = useFonts({
    'Terminal-Dosis-Regular': require('../../assets/fonts/TerminalDosis-Regular.ttf'),
    'Dosis-SemiBold': require('../../assets/fonts/Dosis-SemiBold.ttf')
  })

  if (!fontsLoaded) {
    return null
  }

  const onPress = async () => {
    console.log(currentDateAndCamera.camera)
    if (!currentDateAndCamera.camera) return null
    const apiDateFornat = dateTransform(currentDateAndCamera.date, 'api')
    const data = await getPhotos(apiDateFornat, currentDateAndCamera.camera)
    navigation.navigate('Photos', {
      photos: data.photos,
      camera: currentDateAndCamera.camera,
      date: currentDateAndCamera.date
    })
    setPhotos(data.photos)
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../../assets/selectionBg.jpg')}
        resizeMode="stretch"
      >
        <Text style={styles.text}>Select Camera and Date</Text>
        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputText}>Rover Camera</Text>
            <CameraPicker />
          </View>
          <View style={styles.input}>
            <Text style={styles.inputText}>Date</Text>
            <DatePicker />
          </View>
          <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>Explore</Text>
          </Pressable>
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
  text: {
    fontFamily: 'Dosis-SemiBold',
    fontSize: 18,
    lineHeight: 22,
    textAlign: 'center',
    paddingTop: 42
  },
  form: {
    alignItems: 'center',
    paddingTop: 167,
    flex: 1,
    gap: 16
  },
  input: {
    gap: 7
  },
  inputText: {
    fontFamily: 'Terminal-Dosis-Regular',
    fontSize: 14,
    lineHeight: 17.7
  },
  button: {
    backgroundColor: '#BF2E0E',
    borderRadius: 10,
    paddingHorizontal: 135,
    paddingVertical: 18,
    marginTop: 24
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Dosis-SemiBold',
    fontSize: 18,
    lineHeight: 22
  }
})

export default SelectionScreen
