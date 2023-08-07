import { SafeAreaView, Text, Pressable, View, StyleSheet } from 'react-native'
import BackSvg from '../components/Svg/BackSvg'
import { accordance } from '../constants/constants'
import { dateTransform } from '../helpers/dateTransform'
import { useFonts } from 'expo-font'

function PhotosScreen({ route, navigation }) {
  const [fontsLoaded] = useFonts({
    'Terminal-Dosis-Regular': require('../../assets/fonts/TerminalDosis-Regular.ttf'),
    'Dosis-SemiBold': require('../../assets/fonts/Dosis-SemiBold.ttf')
  })

  const { photos, camera, date } = route.params

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.icon}>
          <Pressable onPress={() => navigation.goBack()}>
            <BackSvg />
          </Pressable>
        </View>
        <View style={styles.info}>
          <Text style={styles.camera}>{accordance[camera]}</Text>
          <Text style={styles.date}>{dateTransform(date)}</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 42
  },
  icon: {
    position: 'absolute',
    left: 16,
    width: 24,
    height: 24
  },
  info: {
    alignSelf: 'center',
    alignItems: 'center'
  },
  camera: {
    fontFamily: 'Dosis-SemiBold',
    fontSize: 18,
    lineHeight: 22
  },
  date: {
    fontFamily: 'Terminal-Dosis-Regular',
    fontSize: 13,
    lineHeight: 22
  }
})

export default PhotosScreen
