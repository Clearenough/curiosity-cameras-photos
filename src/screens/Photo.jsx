import { SafeAreaView, Text, StyleSheet, Image } from 'react-native'
import Header from '../components/Header'
import { useFonts } from 'expo-font'
import ShareSvg from '../components/Svg/ShareSvg'

function PhotoScreen({ route, navigation }) {
  const [fontsLoaded] = useFonts({
    'Terminal-Dosis-Regular': require('../../assets/fonts/TerminalDosis-Regular.ttf'),
    'Dosis-SemiBold': require('../../assets/fonts/Dosis-SemiBold.ttf')
  })

  const { photo } = route.params

  return (
    <SafeAreaView style={styles.container}>
      <Header
        navigation={navigation}
        color={'white'}
        additionalIcon={() => <ShareSvg style={styles.icon} />}
      >
        <Text style={styles.title}>Photo ID</Text>
        <Text style={styles.id}>{photo.id}</Text>
      </Header>
      <Image
        style={styles.photo}
        source={{
          uri: photo.img_src
        }}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  icon: {
    position: 'absolute',
    right: 16
  },
  title: {
    fontFamily: 'Terminal-Dosis-Regular',
    fontSize: 13,
    lineHeight: 22,
    color: 'white'
  },
  id: {
    fontFamily: 'Dosis-SemiBold',
    fontSize: 18,
    lineHeight: 22,
    color: 'white'
  },
  photo: {
    height: 674,
    width: 343,
    marginTop: 16,
    alignSelf: 'center',
    borderRadius: 10
  }
})

export default PhotoScreen
