import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
})

export interface AppProps {}

export function App(_props: AppProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Welcome to react-native-web + monorepo!
      </Text>
      <Text style={styles.instructions}>
        This component is being shared between iOS, Android & Web.
      </Text>
      <Text style={styles.instructions}>{instructions}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
