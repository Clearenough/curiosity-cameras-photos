import { View, Pressable, Text, StyleSheet } from 'react-native'
import BackSvg from '../Svg/BackSvg'

function Header({ children, navigation, color, additionalIcon }) {
  return (
    <View style={styles.header}>
      <View style={styles.icon}>
        <Pressable onPress={() => navigation.goBack()}>
          <BackSvg color={color} />
        </Pressable>
      </View>
      <View style={styles.info}>{children}</View>
      {additionalIcon?.()}
    </View>
  )
}

const styles = StyleSheet.create({
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
  }
})

export default Header
