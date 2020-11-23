import React from 'react'
import { StyleSheet, Text, useColorScheme, View } from 'react-native'

import { Colors } from './colors'

export function AppHeader() {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDarkMode ? Colors.darker : Colors.white,
        },
      ]}
    >
      <Text
        style={[
          styles.text,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}
      >
        Welcome to React Native Web + Monorepo
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 200,
  },
  text: {
    fontSize: 36,
    fontWeight: '600',
  },
})
