import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import SelectionScreen from './src/screens/Selection'

export default function App() {
  return (
    <View style={styles.container}>
      <SelectionScreen />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
