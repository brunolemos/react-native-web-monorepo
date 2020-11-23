import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native'

import { AppHeader } from './AppHeader'
import { Colors } from './colors'

export function App() {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <SafeAreaView
      style={[
        styles.safeareaContainer,
        {
          backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        },
      ]}
    >
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={[
          styles.scrollview,
          {
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          },
        ]}
      >
        <AppHeader />

        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}
        >
          <Section title="Code sharing using Monorepo">
            Edit{' '}
            <Text style={styles.highlight}>packages/components/App.tsx</Text> to
            change this screen and then come back to see your edits (in the
            phone or the browser).
          </Section>

          <Section title="Web support via react-native-web">
            Run{' '}
            <Text style={styles.highlight}>yarn workspace web-cra start</Text>{' '}
            or{' '}
            <Text style={styles.highlight}>yarn workspace web-nextjs dev</Text>{' '}
            to open this app in the browser.
            {'\n\n'}
            It shares the same code from mobile. You can also create
            platform-specific files using one of these extensions:{' '}
            <Text style={styles.highlight}>.ios.tsx</Text>,{' '}
            <Text style={styles.highlight}>.android.tsx</Text>,{' '}
            <Text style={styles.highlight}>.web.tsx</Text>, or{' '}
            <Text style={styles.highlight}>.native.tsx</Text>.
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

function Section({
  children,
  title,
}: {
  children: React.ReactNodeArray
  title: string
}) {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}
      >
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}
      >
        {children}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  safeareaContainer: {
    flex: 1,
  },
  scrollview: {
    height: '100%',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
})
