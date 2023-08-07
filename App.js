import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { ContextProvider } from './src/components/CameraAndDateContext'
import SelectionScreen from './src/screens/Selection'
import PhotosScreen from './src/screens/Photos'
import PhotoScreen from './src/screens/Photo'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <ContextProvider>
          <Stack.Navigator
            screenOptions={{
              headerShown: false
            }}
          >
            <Stack.Screen name="Home" component={SelectionScreen} />
            <Stack.Screen name="Photos" component={PhotosScreen} />
            <Stack.Screen name="Photo" component={PhotoScreen} />
          </Stack.Navigator>
        </ContextProvider>
      </View>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
