# React Native [Web] + Monorepo
## 100% code sharing between Web, iOS and Android

This is the source code from [this tutorial](https://dev.to/brunolemos/tutorial-100-code-sharing-between-ios-android--web-using-react-native-web-andmonorepo-4pej).

![article-cover](https://user-images.githubusercontent.com/619186/64933790-1fc27680-d81d-11e9-8077-64a1066b7c17.png)


### How to run

_Requirements: [React Native](https://facebook.github.io/react-native/docs/getting-started.html#native) (last tested on react-native@0.61)_

  - `$ git clone git@github.com:brunolemos/react-native-web-monorepo.git`
  - `$ cd react-native-web-monorepo`
  - `$ yarn`
  - `$ cd packages/mobile/ios`
  - `$ pod install`
  - `$ cd -`
  - `$ yarn workspace web start`
  - `$ yarn workspace mobile start`
  - Run the project
    - [iOS] Via Xcode
      - `yarn xcode` (open the project on Xcode)
      - Press the Run button
    - [Android] Via Android Studio
      - `yarn studio` (open the project on Android Studio)
      - Press the Run button
    - Via CLI
      - _You may need to launch your device emulator before the next command_
      - `$ yarn android` or  `$ yarn ios`

### Author

Follow me on Twitter: [@brunolemos](https://twitter.com/brunolemos)<br/>

<a href="https://twitter.com/brunolemos" target="_blank"><img src="https://github.com/brunolemos.png?size=100" height="100" /></a>


## Who is using this on production

Check out [DevHub](https://github.com/devhubapp/devhub).
The main difference is that it supports Desktop (Electron) in addition to Web, iOS and Android.

![DevHub Desktop](https://user-images.githubusercontent.com/619186/63945240-59d40000-ca49-11e9-98c1-353225f8dcf6.jpg)

![DevHub Menubar](https://github.com/devhubapp/devhub/raw/master/landing/static/screenshots/devhub-desktop-menubar-banner.jpg)

<p align="center">
  <img alt="DevHub Mobile - Notifications" height="620" src="https://github.com/devhubapp/devhub/raw/master/landing/static/screenshots/iphone-notifications-dark.jpg" />
  <img alt="DevHub Mobile - Notification Filters" height="620" src="https://github.com/devhubapp/devhub/raw/master/landing/static/screenshots/iphone-notifications-filters-dark.jpg" />
  <img alt="DevHub Mobile - Events" height="620" src="https://github.com/devhubapp/devhub/raw/master/landing/static/screenshots/iphone-events-dark.jpg" />
</p>

<br/>
