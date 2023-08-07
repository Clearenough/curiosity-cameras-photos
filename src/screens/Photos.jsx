import { SafeAreaView, Text, Pressable } from 'react-native'
import BackSvg from '../components/Svg/BackSvg'

function PhotosScreen({ route, navigation }) {
  const { photos, camera, date } = route.params

  return (
    <SafeAreaView>
      <Text>{camera}</Text>
      <Pressable onPress={() => navigation.goBack()}>
        <BackSvg />
      </Pressable>
    </SafeAreaView>
  )
}

export default PhotosScreen
