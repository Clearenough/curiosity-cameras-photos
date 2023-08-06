import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { ContextProvider } from './src/components/CameraAndDateContext'
import SelectionScreen from './src/screens/Selection'

export default function App() {
  return (
    <View style={styles.container}>
      <ContextProvider>
        <SelectionScreen />
      </ContextProvider>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
