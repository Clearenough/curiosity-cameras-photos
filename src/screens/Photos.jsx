import {
  SafeAreaView,
  Text,
  Pressable,
  View,
  StyleSheet,
  FlatList,
  Image
} from 'react-native'
import { accordance } from '../constants/constants'
import { dateTransform } from '../helpers/dateTransform'
import { useFonts } from 'expo-font'
import Header from '../components/Header'

function PhotosScreen({ route, navigation }) {
  const [fontsLoaded] = useFonts({
    'Terminal-Dosis-Regular': require('../../assets/fonts/TerminalDosis-Regular.ttf'),
    'Dosis-SemiBold': require('../../assets/fonts/Dosis-SemiBold.ttf')
  })

  const { photos, camera, date } = route.params

  const onPress = (item) => {
    navigation.navigate('Photo', {
      photo: item
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} color={'black'}>
        <Text style={styles.camera}>{accordance[camera]}</Text>
        <Text style={styles.date}>{dateTransform(new Date(date))}</Text>
      </Header>
      <View style={styles.photos}>
        {photos.length === 0 ? (
          <Text>No Photos</Text>
        ) : (
          <FlatList
            data={photos}
            renderItem={({ item }) => (
              <Pressable onPress={() => onPress(item)}>
                <Image
                  style={styles.photo}
                  source={{
                    uri: item.img_src
                  }}
                />
              </Pressable>
            )}
            keyExtractor={(item) => item.id}
            numColumns={3}
          />
        )}
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
  },
  photos: {
    marginHorizontal: 16,
    paddingTop: 16
  },
  photo: {
    borderRadius: 10,
    width: 109,
    height: 109,
    margin: 4
  }
})

export default PhotosScreen
