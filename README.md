# React Native [Web] + Monorepo
## 100% code sharing between Web, iOS and Android

This is the source code from [this tutorial](https://dev.to/brunolemos/tutorial-100-code-sharing-between-ios-android--web-using-react-native-web-andmonorepo-4pej).

![article-cover](https://user-images.githubusercontent.com/619186/53903807-69870480-4023-11e9-95bc-98caaca01445.jpg)


### How to run

_Requirements: [React Native](https://facebook.github.io/react-native/docs/getting-started.html#native)_

  - `$ git clone git@github.com:brunolemos/react-native-web-monorepo.git`
  - `$ cd react-native-web-monorepo`
  - `$ yarn`
  - `$ yarn workspace web start`
  - `$ yarn workspace mobile start`
  - Run the project
    - [iOS] Via Xcode
      - `open packages/mobile/ios/myprojectname.xcodeproj` (open the project on Xcode)
      - Press the Run button
    - [Android] Via Android Studio
      - `studio ./packages/mobile/android/` (open the project on Android Studio)
      - Press the Run button
    - Via CLI
      -  _Open a new terminal tab_
      - `$ cd packages/mobile`
      - `$ npm un -g react-native-cli`
      - `$ npm i -g @react-native-community/cli`
      - _You may need to launch your device emulator before the next command_
      - `$ react-native run-ios` or `react-native run-android`

### Author

Follow me on Twitter: [@brunolemos](https://twitter.com/brunolemos)<br/>

<a href="https://twitter.com/brunolemos" target="_blank"><img src="https://github.com/brunolemos.png?size=100" height="100" /></a>


## Who is using this on production

Check out [DevHub](https://github.com/devhubapp/devhub).
The main difference is that it supports Desktop (Electron) in addition to Web, iOS and Android.

![DevHub Desktop](https://user-images.githubusercontent.com/619186/57279337-28d95500-707f-11e9-9b2b-60c1af41277a.jpg)

![DevHub Menubar](https://github.com/devhubapp/devhub/blob/master/assets/static/menubar-co.jpg)

<p align="center">
  <img alt="DevHub Mobile - Notifications" height="620" src="https://user-images.githubusercontent.com/619186/57279347-2f67cc80-707f-11e9-8457-e892ff1f57c0.png" />
  <img alt="DevHub Mobile - Notification Filters" height="620" src="https://user-images.githubusercontent.com/619186/57279348-2f67cc80-707f-11e9-8804-073b5d88a4cd.png" />
  <img alt="DevHub Mobile - Events" height="620" src="https://user-images.githubusercontent.com/619186/57279349-30006300-707f-11e9-9edc-283fea7785a4.png" />
</p>

<br/>
