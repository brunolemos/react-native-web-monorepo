import React from 'react'
import { AppRegistry, View } from 'react-native'
import { App } from 'components/src/App'

import { name as appName } from './app.json'

AppRegistry.registerComponent(appName, () => App)
